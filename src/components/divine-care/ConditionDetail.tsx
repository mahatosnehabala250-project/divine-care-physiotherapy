"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface ConditionData {
  id: string;
  name: string;
  icon: React.ReactNode;
  empathy: string;
  empathyInternal: string;
  causes: string[];
  treatments: string[];
  plan: { step: number; title: string; desc: string }[];
}

interface ConditionDetailProps {
  condition: ConditionData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConditionDetail({
  condition,
  open,
  onOpenChange,
}: ConditionDetailProps) {
  if (!condition) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-teal-100 p-2.5 rounded-xl text-teal-700">
              {condition.icon}
            </div>
            <DialogTitle className="text-xl text-teal-900">
              {condition.name}
            </DialogTitle>
          </div>
          <DialogDescription className="sr-only">
            Details about {condition.name} treatment at Divine Care
          </DialogDescription>
        </DialogHeader>

        {/* Empathy Section */}
        <div className="space-y-4 mt-2">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 font-medium text-base">
              {condition.empathy}
            </p>
            <p className="text-amber-700 text-sm mt-2">
              {condition.empathyInternal}
            </p>
          </div>

          {/* Causes */}
          <div>
            <h4 className="text-sm font-bold text-teal-900 uppercase tracking-wider mb-3">
              Causes & Risk Factors
            </h4>
            <ul className="space-y-2">
              {condition.causes.map((cause, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="size-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-teal-800 text-sm">{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-bold text-teal-900 uppercase tracking-wider mb-3">
              Our Treatment Approach
            </h4>
            <ul className="space-y-2">
              {condition.treatments.map((treatment, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-teal-800 text-sm">{treatment}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3-Step Plan */}
          <div>
            <h4 className="text-sm font-bold text-teal-900 uppercase tracking-wider mb-3">
              Aapka Recovery Plan
            </h4>
            <div className="space-y-3">
              {condition.plan.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start gap-3 bg-teal-50 rounded-xl p-3"
                >
                  <div className="size-8 rounded-full bg-teal-700 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <p className="font-semibold text-teal-900 text-sm">
                      {step.title}
                    </p>
                    <p className="text-teal-600 text-xs mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="https://wa.me/919431757875"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-base py-6 group">
                Book Appointment for {condition.name}
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
