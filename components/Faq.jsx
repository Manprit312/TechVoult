
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
const FAQAccordion=()=> {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "How long does it take to develop a game?",
      a: "Timelines vary by scope. Small MVPs can take 8–12 weeks, mid-sized titles 4–6 months, and large productions longer. We share a milestone plan after requirements are finalized.",
    },
    {
      q: "Which platforms do you support?",
      a: "We build for Mobile (iOS/Android), PC, Console, and WebGL. We also support cross-platform delivery when appropriate.",
    },
    {
      q: "What game engines and tools do you use?",
      a: "Primarily Unity and Unreal Engine. For art pipelines we use Blender, Maya, Substance; for backend we use Node/Go/Python depending on needs.",
    },
    {
      q: "Do you provide post-launch maintenance and updates?",
      a: "Yes. We offer live-ops, feature updates, performance optimization, crash fixes, analytics integration, and ongoing content drops.",
    },
    {
      q: "Can you help with monetization and publishing?",
      a: "Absolutely. We advise on IAP, ads, subscriptions, storefront publishing, and platform compliance (App Store, Google Play, Steam, console stores).",
    },
    {
      q: "How much does game development cost?",
      a: "It depends on scope, platform(s), assets, online features, and live-ops. We provide a detailed estimate after a short discovery call.",
    },
  ];

  return (
    <div className="mt-8 max-w-6xl w-full mx-auto divide-y rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 via-purple-50">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left"
            >
              <span className="flex items-center gap-2 font-medium text-gray-900">
                <HelpCircle className="h-5 w-5 text-indigo-600" />
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              id={`faq-panel-${i}`}
              className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
              <p className="px-12 pb-5 text-gray-700">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;