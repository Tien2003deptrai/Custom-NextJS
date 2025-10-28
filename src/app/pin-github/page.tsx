'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/* ========= Fake data ========= */
type RepoId = string;
type Repo = { id: RepoId; name: string };

const CATALOG: Repo[] = [
  { id: 'r1', name: 'BACKEND-CAP2-STUDY_JAPAN' },
  { id: 'r2', name: 'Auth-BlackListToken' },
  { id: 'r3', name: 'amazon-clone-react-native' },
  { id: 'r4', name: 'ChatApp-FE' },
  { id: 'r5', name: 'dnrea-press' },
  { id: 'r6', name: 'course-module' },
];

const LS_KEY = 'demo.pins.order.smooth.v1';

/* ======== Sortable Card ======== */
function SortableCard({ repo }: { repo: Repo }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: repo.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <li ref={setNodeRef} style={style}>
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <button
            {...attributes}
            {...listeners}
            aria-label="Drag handle"
            className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 bg-neutral-50 text-neutral-600"
            title="Drag"
          >
            ::
          </button>
          <div className="min-w-0">
            <div className="truncate font-medium">{repo.name}</div>
            <p className="mt-1 text-sm text-neutral-600">id: {repo.id}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

/* ============== Page ============== */
export default function Page() {
  const [order, setOrder] = useState<RepoId[]>(CATALOG.map(r => r.id));
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  // restore saved order
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    try {
      const ids = JSON.parse(raw) as RepoId[];
      const allow = new Set(CATALOG.map(r => r.id));
      const cleaned = ids.filter(id => allow.has(id));
      if (cleaned.length) setOrder(cleaned);
    } catch {}
  }, []);

  const items = useMemo(() => {
    const map = new Map(CATALOG.map(r => [r.id, r]));
    return order.map(id => map.get(id)!).filter(Boolean);
  }, [order]);

  // sensors: pointer with small activation distance → ít “bắt nhầm”
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  // auto-save (save on drop)
  const saveRef = useRef<number | null>(null);
  const scheduleSave = (ids: RepoId[]) => {
    if (saveRef.current) window.clearTimeout(saveRef.current);
    setStatus('saving');
    saveRef.current = window.setTimeout(() => {
      localStorage.setItem(LS_KEY, JSON.stringify(ids));
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 900);
    }, 250);
  };

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    setOrder(prev => {
      const oldIndex = prev.indexOf(String(active.id));
      const newIndex = prev.indexOf(String(over.id));
      const next = arrayMove(prev, oldIndex, newIndex); // INSERT-like theo vị trí thực tế
      scheduleSave(next);
      return next;
    });
  };

  return (
    <main className="min-h-dvh bg-[#f6f6f6] p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Pinned repositories</h1>
          <StatusBadge state={status} />
        </div>

        <DndContext sensors={sensors} onDragEnd={onDragEnd}>
          {/* rectSortingStrategy → mượt cho grid (2 cột) */}
          <SortableContext items={order} strategy={rectSortingStrategy}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map(repo => (
                <SortableCard key={repo.id} repo={repo} />
              ))}
            </ul>
          </SortableContext>
        </DndContext>

        <p className="mt-3 text-xs text-neutral-500">
          Kéo cả card bằng nút :: để di chuyển. (Tự lưu sau khi thả)
        </p>
      </div>
    </main>
  );
}

/* ======== Status badge (nhẹ nhàng) ======== */
function StatusBadge({ state }: { state: 'idle' | 'saving' | 'saved' }) {
  if (state === 'idle') return <span />;
  const label = state === 'saving' ? 'Saving…' : 'Saved';
  return (
    <span className="rounded-lg border border-neutral-300 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm">
      {label}
    </span>
  );
}
