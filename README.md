# ⛏️ Mineral Resources Trading Tracker

A cloud-connected, invite-only web application for tracking mineral purchases, sales, inventory, and profits. Built for small-scale mineral trading businesses handling Tin, Columbite, Zircon, Monazite, Lead, and other minerals.

**Live App:** https://mrt-tracker.netlify.app/ 
**Source Code:** https://akandeaka.github.io/Mineral-resources-trading-tracker/

---

## 🔐 Access & Security

This is a **private, invite-only application**:

- Public sign-ups are **disabled**
- Only users manually added by the admin can log in
- Each user has an isolated account — they can only see their own data
- All data is encrypted and stored in **Google Cloud Firestore**
- Authentication is handled by **Firebase Authentication**

### Requesting Access
Contact the admin to have your email added. You will receive:
- App URL
- Your login email
- A temporary password (change it after first login)

---

## ✨ Features

### 🛒 Purchase Management
- Record every mineral purchase with date, mineral type, supplier, and location
- **Weight unit dropdown: kg / lb / tonne** with automatic kg equivalent
- Itemized cost breakdown: Transport, Labour, Equipment, Site Fees, Processing, Miscellaneous
- Auto-calculated: Total Cost, Cost per unit

### 💰 Sales (Multiple per Purchase)
- One purchase can have many partial sales
- Each sale records: date, buyer, quantity, total sell amount
- Auto-calculated: Sell price per unit, Profit per sale, Remaining stock
- Prevents overselling — you can't sell more than you hold

### 📦 Live Inventory
- Real-time view of unsold stock
- Total invested in held minerals
- Average cost per unit
- Quick "Add Sale" button per open purchase

### 🧾 By-Mineral Analysis
- Performance table for every mineral
- Bought / Sold / Remaining quantities
- Total Invested / Revenue / Profit
- Average buy and sell prices
- Sorted by most profitable

### 👤 Suppliers & Buyers
- Supplier leaderboard with purchase history
- Buyer leaderboard with revenue history
- Last transaction date for each party

### 📊 Dashboard
- Period selector: **Week / Month / Year / Custom**
- Key stats: Purchases, Sales, Invested, Revenue, Profit, Stock Value
- **Profit Trend** chart
- **Weight Traded** chart (bought vs sold)
- 🏆 Top Suppliers & Top Buyers
- Auto-generated insights

### 💾 Data & Backup
- Cloud sync via Firestore (automatic)
- Manual JSON export/import as extra safety
- Offline support (works without internet, syncs when back)

### 📱 Progressive Web App
- Installable on phone, tablet, and desktop
- Works offline
- Custom "MRT" icon
- Full-screen native app experience

---

## ⚖️ Weight Units

Record weight in **kg, lb (pounds), or tonne**:

- Selected per transaction via dropdown
- App shows automatic kg equivalent for lb and tonne
- Cost and sell price per unit displays in your chosen unit
- Old records default to kg for backward compatibility

---

## 🏗️ Technical Architecture
