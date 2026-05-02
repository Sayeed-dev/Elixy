# ELIXY - Connection Management Platform

A modern web application designed to help you maintain meaningful relationships by tracking and managing interactions with your friends and contacts.

## 🎯 Overview

ELIXY is a relationship management platform that helps you stay connected with people who matter. Track your interactions, set communication goals, and visualize your connection patterns with an intuitive dashboard.

## ✨ Key Features

### 📱 **Contact Management**
- Browse and view all your friends at a glance
- Track individual contact profiles with detailed information
- Monitor relationship status (On Track, Almost Due, Overdue)
- Categorize contacts by tags (work, family, hobby, etc.)

### 📊 **Analytics & Insights**
- Visual pie chart showing interaction distribution
- Real-time statistics on your connections
- Track total interaction logs
- Identify which types of connections you prioritize

### ⏱️ **Timeline & Logging**
- Chronological view of all interactions
- Log interactions by type (Call, Text, Video)
- View detailed interaction history with timestamps
- Add custom notes to interactions

### 🎯 **Goal Tracking**
- Set contact-specific communication goals
- Monitor days since last contact
- Track next due dates for connections
- Get visual indicators for contact urgency

### 🔔 **Quick Actions**
- Log calls, texts, and video interactions instantly
- Snooze contacts for later
- Archive contacts
- Delete or manage contact relationships

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sayeed-dev/Elixy.git

# Navigate to project directory
cd Elixy

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js              # Home page
│   ├── layout.js            # Root layout with providers
│   ├── globals.css          # Global styles
│   ├── friends/
│   │   └── [id]/
│   │       └── page.jsx     # Individual friend profile
│   ├── timeline/
│   │   └── page.jsx         # Interaction timeline
│   └── stats/
│       └── page.jsx         # Analytics dashboard
├── components/
│   ├── Header.jsx           # Navigation header
│   ├── Hero.jsx             # Landing hero section
│   ├── Counter.jsx          # Statistics display
│   ├── Friends.jsx          # Friends grid list
│   ├── ContactProfile.jsx   # Detailed contact view
│   └── Footer.jsx           # Footer section
├── context/
│   └── logContext.js        # Global log management context
├── lib/
│   └── friends.js           # Friends data fetching
└── public/
    └── friends.json         # Sample friends data
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind component library
- **Recharts** - Data visualization library
- **Lucide React** - Icon library
- **React Icons** - Additional icon library
- **React Toastify** - Notification system
- **Context API** - State management

## 📄 Core Components

### Home Page (`page.js`)
Main landing page featuring hero section, statistics counter, and friends grid.

### Header (`Header.jsx`)
Sticky navigation with three main routes:
- Home
- Timeline
- Stats

### Friends Grid (`Friends.jsx`)
Displays all contacts with quick status indicators and tags.

### Contact Profile (`ContactProfile.jsx`)
Comprehensive single contact view with:
- Profile information and status
- Communication statistics
- Quick check-in buttons (Call, Text, Video)
- Action buttons (Snooze, Archive, Delete)
- Relationship goal settings

### Timeline (`timeline/page.jsx`)
Chronological view of all interactions with:
- Icon-coded interaction types
- Friend names and dates
- Custom notes
- Interactive hover effects

### Stats Dashboard (`stats/page.jsx`)
Visual analytics featuring:
- Donut chart of interaction distribution
- Total interaction count
- Legend with interaction types
- Responsive design

## 📊 Data Structure

### Friend Object
```javascript
{
  "id": 1,
  "name": "David Kim",
  "email": "david.kim@example.com",
  "days_since_contact": 18,
  "status": "almost_due",        // on_track | almost_due | overdue
  "tags": "work",                 // work | family | hobby
  "goal": 14,                     // Communication goal in days
  "next_due_date": "2025-07-10"
}
```

### Log Object
```javascript
{
  "friendName": "David Kim",
  "type": "Call",                 // Call | Text | Video
  "date": "5/2/2026",
  "note": "Checked in via Call"
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Gray tones (gray-50 to gray-900)
- **Success**: Green (#10b981)
- **Info**: Blue (#3b82f6)
- **Warning**: Purple (#8b5cf6)
- **Danger**: Orange (#f59e0b)

### Components
- Rounded cards with subtle shadows
- Smooth transitions and hover effects
- Responsive grid layouts
- Mobile-first design approach

## 📱 Responsive Design

- **Mobile**: Optimized single column layout
- **Tablet**: Two-column grid (sm and md breakpoints)
- **Desktop**: Multi-column grid with full features
- **Large Screens**: Centered max-width containers

## 🔄 Context API State Management

### LogContext
Manages global interaction logs with:
- `logs` - Array of all interactions
- `addLog()` - Function to add new interaction

```javascript
const { logs, addLog } = useLogs();
```

## 💾 Data Persistence

- Friend data loaded from `public/friends.json`
- Interaction logs stored in React Context (session-based)
- Toast notifications for user feedback

## 🎯 User Workflows

### Adding an Interaction
1. Click on a friend from the grid
2. Navigate to their profile
3. Click on Quick Check-In button (Call, Text, Video)
4. Interaction automatically logged with timestamp

### Viewing Analytics
1. Navigate to Stats page
2. View pie chart of interaction distribution
3. See total interaction count
4. Analyze connection patterns

### Tracking Relationships
1. View friends grid with status badges
2. Click on friend to see details
3. Monitor days since contact
4. Check next due date

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

## 📝 Environment Variables

Create a `.env.local` file if needed (currently not required for development).

## 🐛 Known Limitations

- Logs are stored in memory (reset on page refresh)
- Friend data is read from static JSON file
- No backend database integration
- Contact pictures from random API

## 📈 Future Enhancements

- [ ] Backend database integration
- [ ] User authentication & login
- [ ] Persistent data storage
- [ ] Export interaction reports
- [ ] Calendar view for interactions
- [ ] Reminders and notifications
- [ ] Advanced filters and search
- [ ] Multiple user support
- [ ] Dark mode toggle
- [ ] Mobile app version

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sayeed-dev**
- GitHub: [@Sayeed-dev](https://github.com/Sayeed-dev)
- Project: [ELIXY](https://github.com/Sayeed-dev/Elixy)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

### How to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, questions, or suggestions:
- Open an issue on GitHub
- Contact the author

---

## 🌟 Quick Tips

- **Status Indicators**: 
  - 🟢 On Track - Contact is on schedule
  - 🟡 Almost Due - Contact coming up soon
  - 🔴 Overdue - Overdue for contact

- **Interaction Types**:
  - ☎️ Call - Phone conversation
  - 💬 Text - Message or chat
  - 📹 Video - Video call

- **Navigation**: Use the header to quickly jump between Home, Timeline, and Stats

---

**Built with ❤️ by Sayeed-dev | Maintain meaningful connections with ELIXY**
