import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
//In Convex, a mutation is a function that modifies data in the database. It is similar to POST, PUT, DELETE operations in REST APIs or mutations in GraphQL.


/* ctx (short for context) is an object provided by Convex that gives you access to important utilities like:

Database operations (ctx.db) → Read or write data
Authentication (ctx.auth) → Get the currently logged-in user
Running other Convex functions (ctx.runMutation, ctx.runQuery)
Logging (ctx.log) → Debugging information
*/
export const syncUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) return;
// if user does not exist insert into the database
    return await ctx.db.insert("users", {
      ...args,
      role: "candidate",
    });
  },
});
//Fetches all users from the database but only for authenticated users.
export const getUsers = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User is not authenticated");

    const users = await ctx.db.query("users").collect();

    return users;
  },
});
//Fetches a specific user based on their clerkId.
export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    return user;
  },
});