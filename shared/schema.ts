import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rooms = pgTable("rooms", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  image: text("image").notNull(),
  amenities: text("amenities").array().notNull(),
  maxGuests: integer("max_guests").notNull(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey(),
  guestName: text("guest_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  roomType: text("room_type").notNull(),
  checkIn: text("check_in").notNull(),
  checkOut: text("check_out").notNull(),
  guests: integer("guests").notNull(),
  status: text("status").notNull(),
  specialRequests: text("special_requests"),
});

export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey(),
  source: text("source").notNull(),
  name: text("name").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull(),
  timestamp: timestamp("timestamp").notNull(),
});

export const insertRoomSchema = createInsertSchema(rooms).omit({ id: true });
export const insertBookingSchema = createInsertSchema(bookings).omit({ id: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true });

export type Room = typeof rooms.$inferSelect;
export type InsertRoom = z.infer<typeof insertRoomSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
