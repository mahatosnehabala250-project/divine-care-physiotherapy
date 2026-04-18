"use client";

import React from "react";
import { AlertTriangle, RefreshCw, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="py-16 px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-teal-900 mb-2">
              Kuch gadbad ho gayi
            </h3>
            <p className="text-teal-600 mb-6 text-sm">
              Yeh page load nahi ho paaya. Please try again ya seedha humse contact karein.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={this.handleRetry}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Dobara Try Karein
              </Button>
              <a href="https://wa.me/919431757875" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
