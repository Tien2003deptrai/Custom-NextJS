import React from 'react';

export class ErrorBoundary extends React.Component<{ fallback?: React.ReactNode; children?: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: any, info: any) {
    console.error(err, info);
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? <div className='p-4 text-red-600'>Đã có lỗi xảy ra.</div>;
    return this.props.children as any;
  }
}
