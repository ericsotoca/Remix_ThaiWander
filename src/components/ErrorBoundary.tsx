import React, { Component, ErrorInfo, ReactNode } from 'react';
import { safeStorage } from '../utils/storage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReset = () => {
    safeStorage.clear();
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              🏕️
            </div>
            
            <h1 className="text-xl font-bold text-white mb-2">
              เกิดข้อผิดพลาดในการโหลด / Erreur de chargement
            </h1>
            
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              ขออภัยในความไม่สะดวก สามารถกดปุ่มด้านล่างเพื่อรีเซ็ตข้อมูลและโหลดแอปพลิเคชันใหม่อีกครั้ง
              <br />
              <span className="text-xs text-slate-400 mt-1 block">
                Une erreur est survenue. Cliquez ci-dessous pour réinitialiser les données et relancer l'application.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-medium text-sm transition-colors cursor-pointer"
              >
                โหลดใหม่ / Actualiser
              </button>
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors cursor-pointer shadow-lg shadow-emerald-950/40"
              >
                รีเซ็ตข้อมูล / Réinitialiser
              </button>
            </div>

            {this.state.error && (
              <details className="mt-6 text-left border-t border-slate-700/60 pt-4 text-xs text-slate-400">
                <summary className="cursor-pointer hover:text-slate-300">รายละเอียดข้อผิดพลาด / Détails</summary>
                <pre className="mt-2 p-2 bg-slate-950/80 rounded border border-slate-800 text-[11px] overflow-auto max-h-32 text-rose-300">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
