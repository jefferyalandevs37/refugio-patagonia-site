# Design Guidelines: Refugio Rio Cisnes Patagonia

## Design Approach
**Reference-Based**: Drawing from Selina Hotels' modern tech aesthetic, Hilton's luxury presentation, and boutique fishing lodge elegance. This creates a sophisticated outdoor luxury experience that balances adventure with refinement.

## Typography System

**Primary Font**: Montserrat (Google Fonts)
- Headings: 600-700 weight
- Body/UI: 400-500 weight
- Sizes: Hero (4xl-6xl), H1 (3xl-4xl), H2 (2xl-3xl), H3 (xl-2xl), Body (base-lg), Small (sm-base)

**Accent Font**: Playfair Display (Google Fonts)
- Use for luxury callouts, featured quotes, and premium section headers
- Weight: 400-600
- Strategic placement only (hero taglines, section highlights)

## Layout & Spacing

**Tailwind Spacing Units**: Consistently use 4, 6, 8, 12, 16, 20, 24 for margins and padding
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card gaps: gap-6 to gap-8
- Premium spacing standard: 24px (spacing-6)

**Container Strategy**:
- Maximum width: max-w-7xl for full sections
- Content containers: max-w-6xl
- Text blocks: max-w-3xl
- Dashboard content: max-w-full with px-6 to px-8

## Component Library

### Landing Page Components

**Navigation**:
- Fixed/sticky header with transparent-to-solid transition on scroll
- Logo left, menu items center/right
- CTA button ("Book Now") prominent
- Includes: Rooms, Amenities, Location, Gallery, Contact

**Hero Section**:
- Full-viewport (90-100vh) immersive hero
- Large background image (Patagonia landscape/lodge exterior)
- Overlay gradient for text readability
- Centered content with hotel name in Playfair Display
- Tagline in Montserrat
- Dual CTAs: "Book Your Stay" (primary) + "Explore Rooms" (secondary)
- Buttons with blurred backgrounds (backdrop-blur-sm, bg-white/20)

**Room Showcase**:
- 3-column grid on desktop (2-col tablet, 1-col mobile)
- High-quality room images
- Card design with image, title, brief description, price, amenities icons
- "View Details" link on each card

**Amenities Section**:
- 4-column icon grid (2-col mobile)
- Icons from Heroicons
- Fishing, Hiking, Dining, Spa, WiFi, etc.
- Short descriptions under each

**Location/Gallery**:
- Embedded map or location highlight
- Image gallery in masonry or grid layout (4-6 images)
- Patagonia landscapes, fishing activities, interior shots

**Testimonials**:
- 2-3 column layout with guest quotes
- Guest photos/avatars
- 5-star ratings
- Attribution (name, location)

**Footer**:
- Multi-column (About, Quick Links, Contact, Social)
- Newsletter signup
- Trust badges/certifications
- Copyright and legal links

**Chatbot Interface**:
- Fixed bottom-right position
- Chat bubble trigger button
- Expandable chat window
- Message history display
- Input field with send button
- Non-functional but visually complete

### Dashboard Components

**Sidebar Navigation**:
- Fixed left sidebar (desktop), collapsible hamburger (mobile)
- Logo at top
- Menu items: Dashboard, Bookings, Travelers, Inquiries, Settings
- Active state indication

**Booking Calendar**:
- Month view with date grid
- Visual indicators for bookings (color-coded by status)
- Click to view booking details
- Legend for status colors

**Booking List Table**:
- Columns: Guest Name, Check-in, Check-out, Room Type, Status, Actions
- Sortable headers
- Status badges (Confirmed, Pending, Checked-in, Completed)
- Action buttons (View, Edit, Cancel)
- Search and filter controls above table

**Traveler Reports**:
- Summary cards at top (Total Guests, Current Guests, Upcoming, etc.)
- Detailed guest list with expandable rows
- Export functionality button
- Date range selector

**Inquiry Management**:
- Split view: Inquiry list (left) + Message thread (right)
- Tabs for WhatsApp and Chat inquiries
- Message bubbles with timestamps
- Quick reply templates
- Status indicators (New, In Progress, Resolved)

**Stats Dashboard**:
- KPI cards (Occupancy Rate, Revenue, Average Stay, etc.)
- Charts: Line graph for bookings over time, bar chart for room popularity
- Use simple, clean visualizations

**Booking Engine Flow**:
- Step 1: Room selection with availability calendar
- Step 2: Guest details form (name, email, phone, special requests)
- Step 3: Payment summary (non-functional but visually complete)
- Step 4: Confirmation screen
- Progress indicator at top

## Visual Elements

**Card Design**:
- Subtle shadows (shadow-md to shadow-lg)
- Rounded corners (rounded-lg to rounded-xl)
- Hover elevation effect (subtle scale or shadow increase)
- Clean borders where appropriate

**Buttons**:
- Primary: Solid fill with hover state
- Secondary: Outlined with hover fill
- On-image buttons: Blurred background (backdrop-blur-sm, bg-white/20 or bg-black/20)
- Consistent padding (px-6 py-3 for medium, px-8 py-4 for large)

**Forms**:
- Input fields with clear labels
- Consistent height (h-12)
- Focus states with border highlight
- Error states with red indicators
- Helper text below fields

**Data Tables**:
- Zebra striping for rows
- Hover states on rows
- Sticky headers for long tables
- Responsive (card view on mobile)

**Icons**: Heroicons (via CDN) for all interface icons - fishing, hiking, bed, wifi, etc.

## Images

**Hero Image**: Large, high-impact Patagonia landscape or lodge exterior shot - full-width, 90-100vh height
**Room Images**: Professional interior photography for each room type - 3-4 images per room
**Amenity/Activity Images**: Fishing scenes, hiking trails, dining area, outdoor activities - 6-8 supporting images
**Gallery Section**: Mix of landscape, exterior, and interior shots - 8-12 images in grid
**Testimonial Photos**: Guest avatars or placeholder circles - 3-6 images

Image placement: Hero (top), Room cards (feature images), Amenities section (background or supporting), Gallery section (grid), About/Location sections (supporting visuals)

## Responsive Behavior

- Desktop (lg): Full multi-column layouts, sidebar visible
- Tablet (md): 2-column grids, adjusted spacing
- Mobile (base): Single column, stacked elements, hamburger menu, collapsible dashboard sidebar

## Animation Strategy

Minimal, purposeful animations only:
- Smooth scroll behavior
- Fade-in on scroll for sections (subtle)
- Hover transitions on cards/buttons (duration-300)
- Avoid distracting motion

This design creates a premium, trust-inspiring experience that balances the modern tech aesthetic of Selina with Hilton's luxury and the rustic elegance of a high-end fishing lodge.