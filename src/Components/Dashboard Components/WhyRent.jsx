import React from "react";
import { Truck, Wrench, RefreshCcw, ShieldCheck, Sparkles, CalendarClock } from "lucide-react";

const benefits = [
  { id: 1, title: "Free Doorstep Delivery", desc: "Fast, safe, and on-time delivery to your home.", Icon: Truck },
  { id: 2, title: "Free Installation", desc: "Expert assembly and setup included at no extra cost.", Icon: Wrench },
  { id: 3, title: "Easy Returns", desc: "Hassle-free pickups when you want to end or swap.", Icon: RefreshCcw },
  { id: 4, title: "Damage Waiver", desc: "Peace of mind with affordable protection plans.", Icon: ShieldCheck },
  { id: 5, title: "Quality Checked", desc: "Thoroughly cleaned and quality-tested products.", Icon: Sparkles },
  { id: 6, title: "Flexible Plans", desc: "Choose tenure that fits your needs and budget.", Icon: CalendarClock },
];

export default function WhyRent() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-16 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Why Rent Furlenco</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {benefits.map(({ id, title, desc, Icon }) => (
          <div key={id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-teal-600 mb-3">
              <Icon size={20} />
            </div>
            <h3 className="text-sm font-semibold mb-1">{title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
