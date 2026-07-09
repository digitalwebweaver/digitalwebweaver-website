import type { ServicePageData } from "@/lib/types";

const mk = (title: string, desc: string, eyebrow: string, heading: string, lead: string, svcs: { icon: string; title: string; desc: string }[], marqueeItems?: string[]): ServicePageData => ({
  meta: { title, description: desc },
  hero: { eyebrow, heading, lead, breadcrumbs: [{ label: "Home", href: "/" }, { label: "Apps", href: "/apps/" }, { label: eyebrow }], ...(marqueeItems && { marqueeItems }) },
  services: { variant: "svc", eyebrow: "Core Features", heading: "What's Included", items: svcs },
  cta: { heading: `Get ${eyebrow}`, body: "Contact us for a demo, pricing, or custom development." },
});

export const foodDeliveryApp = mk(
  "Food Delivery App Development Company India | Multi-Vendor",
  "Food delivery app development with customer ordering, restaurant dashboard, and driver app — built in 8 weeks with real-time GPS tracking. Get a free quote.",
  "Food Delivery App", "Custom Food Delivery App — Built in 8 Weeks",
  "We build complete three-sided food delivery ecosystems: customer app, restaurant management dashboard, and delivery partner app with real-time tracking.",
  [
    { icon: "📱", title: "Customer App", desc: "Browse, order, and track delivery in real-time on iOS and Android." },
    { icon: "🍽️", title: "Restaurant Dashboard", desc: "Order management, menu builder, and revenue analytics." },
    { icon: "🛵", title: "Driver App", desc: "Order pickup, navigation, and earnings dashboard for delivery partners." },
    { icon: "💳", title: "Payment Integration", desc: "Stripe, Razorpay, UPI, and cash-on-delivery support." },
    { icon: "📍", title: "Real-Time Tracking", desc: "Live delivery tracking with ETA updates via WebSocket." },
    { icon: "🔔", title: "Push Notifications", desc: "Order status, promo alerts, and driver assignment notifications." },
  ]
,
  ["Customer App","Restaurant Dashboard","Driver App","React Native","Real-time Tracking","Stripe","Razorpay","Google Maps","Firebase","iOS & Android"]);

export const laundryManagementSystem = mk(
  "Laundry Management System | Software for India, UK & UAE",
  "Laundry management system with order tracking, pickup/delivery scheduling, customer app, and admin panel for laundry businesses. Get a free demo in 24 hours.",
  "Laundry Management", "Laundry Management System for Modern Laundry Businesses",
  "We build complete laundry management software: customer booking app, driver tracking, admin panel, and automated notifications.",
  [
    { icon: "👗", title: "Order Management", desc: "Garment tracking from pickup to delivery with barcode labels." },
    { icon: "📅", title: "Pickup & Delivery", desc: "Schedule management with driver assignment and route planning." },
    { icon: "📱", title: "Customer App", desc: "Book, track, and pay for laundry from a mobile app." },
    { icon: "🔔", title: "SMS/WhatsApp Alerts", desc: "Automated updates at each order stage." },
    { icon: "💰", title: "Billing & Invoicing", desc: "Per-item pricing, subscriptions, and GST-compliant invoices." },
    { icon: "📊", title: "Admin Dashboard", desc: "Revenue, order volume, and operations analytics." },
  ]
,
  ["Customer App","Driver App","QR Tracking","React Native","Slot Scheduling","Stripe","Firebase","White-label","Multi-branch"]);

export const inventoryManagementSystem = mk(
  "Inventory Management System | Custom Software India",
  "Inventory management system with real-time stock tracking, purchase orders, multi-warehouse support, and barcode/QR scanning. Get a free quote in 24 hours.",
  "Inventory System", "Custom Inventory Management System for Your Business",
  "We build inventory management systems with real-time stock tracking, purchase orders, barcode scanning, and multi-warehouse support.",
  [
    { icon: "📦", title: "Stock Tracking", desc: "Real-time stock levels across products, variants, and locations." },
    { icon: "🏭", title: "Multi-Warehouse", desc: "Manage stock across multiple locations with transfer workflows." },
    { icon: "📋", title: "Purchase Orders", desc: "Supplier management, PO creation, and receiving workflows." },
    { icon: "🔍", title: "Barcode & QR", desc: "Scan-to-update stock movements with mobile barcode readers." },
    { icon: "📊", title: "Reports & Alerts", desc: "Low-stock alerts, valuation reports, and movement history." },
    { icon: "🔗", title: "Integrations", desc: "Sync with accounting (Tally, QuickBooks) and e-commerce." },
  ]
,
  ["Multi-warehouse","Barcode scanning","QR codes","Shopify sync","WooCommerce","QuickBooks","Purchase orders","ABC analysis","FIFO / LIFO"]);

export const learningManagementSystem = mk(
  "Learning Management System (LMS) Development | India",
  "Learning management system (LMS) with course builder, video hosting, quizzes, certificates, and multi-instructor support. Get a free demo in 24 hours.",
  "LMS Platform", "Custom Learning Management System for Your Training Needs",
  "We build feature-rich LMS platforms with video courses, assessments, progress tracking, certificates, and multi-instructor support.",
  [
    { icon: "📚", title: "Course Builder", desc: "Drag-and-drop course creation with video, text, and quizzes." },
    { icon: "🎥", title: "Video Hosting", desc: "Adaptive bitrate video streaming with progress tracking." },
    { icon: "📝", title: "Assessments", desc: "Quiz builder with multiple question types and auto-grading." },
    { icon: "🏅", title: "Certificates", desc: "Auto-generated, verifiable certificates on course completion." },
    { icon: "👨‍🏫", title: "Multi-Instructor", desc: "Instructor accounts with course management and revenue splits." },
    { icon: "📊", title: "Analytics", desc: "Student progress, engagement, and completion rate dashboards." },
  ],
  ["LMS", "Course builder", "SCORM", "Video hosting", "Certifications", "Multi-instructor", "Gamification", "White-label", "Corporate training", "HLS streaming"]
);

export const codeigniterDevelopment = mk(
  "CodeIgniter Development Company | CI4 Experts India",
  "CodeIgniter development company building custom CI4 apps, REST APIs, and CI2/CI3 legacy migrations for global clients. Get a free quote in 24 hours.",
  "CodeIgniter Development", "CodeIgniter Development — From Legacy to CI4",
  "We build and maintain CodeIgniter applications — from new CI4 projects to legacy CI2/CI3 migration and REST API development.",
  [
    { icon: "🔥", title: "CI4 Development", desc: "New applications built on CodeIgniter 4 with PHP 8." },
    { icon: "🔄", title: "Legacy Migration", desc: "CI2/CI3 to CI4 migration with zero-downtime strategy." },
    { icon: "🔌", title: "REST APIs", desc: "RESTful API development with CodeIgniter 4's resource controller." },
    { icon: "🧩", title: "Custom Modules", desc: "Feature modules and third-party library integration." },
    { icon: "🔒", title: "Security Hardening", desc: "CSRF, XSS filtering, and input validation." },
    { icon: "⚡", title: "Performance", desc: "Query optimisation, caching, and Composer dependency management." },
  ]
,
  ["CodeIgniter 4","CI4 REST API","CI3 migration","PHP 8.2","JWT auth","Query builder","PHPUnit","Docker","Redis cache","CSRF protection"]);

export const wpLogisticsCourierPlugin = mk(
  "CourierPress – WordPress Logistics Tracking Plugin | India",
  "CourierPress WordPress plugin for logistics businesses: shipment tracking, courier assignment, and customer notifications. Get a free demo today.",
  "CourierPress Plugin", "CourierPress — WordPress Logistics Tracking Plugin",
  "CourierPress is our commercial WordPress plugin for logistics and courier businesses — shipment tracking, driver assignment, and customer notifications.",
  [
    { icon: "📦", title: "Shipment Tracking", desc: "Real-time shipment status with customer-facing tracking page." },
    { icon: "🚚", title: "Courier Assignment", desc: "Assign shipments to drivers with status update workflow." },
    { icon: "🔔", title: "Customer Notifications", desc: "Email and SMS alerts at each shipment milestone." },
    { icon: "📊", title: "Admin Dashboard", desc: "Shipment management, driver management, and reporting." },
    { icon: "🔌", title: "WooCommerce Integration", desc: "Auto-create shipments from WooCommerce orders." },
    { icon: "📋", title: "Label Printing", desc: "Generate and print shipping labels from the admin." },
  ]
,
  ["WordPress","WooCommerce","Shipment tracking","Driver assignment","Email/SMS alerts","Admin panel","Label printing","REST API","PHP 8"]);

export const wpCourierTrackingPlugin = mk(
  "WordPress Courier Tracking Plugin | Digital Web Weaver",
  "WordPress courier tracking plugin with an embeddable tracking widget, shipment status pages, and multi-courier API support. Get a free demo today.",
  "Courier Tracking Plugin", "WordPress Courier Tracking Plugin",
  "Our standalone WordPress courier tracking plugin lets customers track shipments directly on your website — no redirect to third-party sites.",
  [
    { icon: "🔍", title: "Tracking Widget", desc: "Embeddable tracking form on any page or post." },
    { icon: "📦", title: "Status Pages", desc: "Beautiful shipment status pages with timeline view." },
    { icon: "🚚", title: "Multi-Courier", desc: "Support for multiple courier APIs via a unified interface." },
    { icon: "🔔", title: "Email Notifications", desc: "Automated emails when shipment status changes." },
    { icon: "🔌", title: "REST API", desc: "JSON API endpoint for custom tracking integrations." },
    { icon: "🎨", title: "Customisable", desc: "Colour, typography, and label customisation options." },
  ]
,
  ["WordPress","Tracking widget","Status pages","Multi-courier","Email notifications","REST API","WooCommerce","PHP 8","Responsive"]);
