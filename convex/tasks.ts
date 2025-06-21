import { v } from "convex/values"
import {query,mutation}from "./_generated/server"
export const getTask=query({
    args:{},
    handler:async(ctx,args)=>{
      const tasks= await ctx.db.query("tasks").collect()
      return tasks
    },
});

export const addTask=mutation({
    args:{
        text:v.string()
    },
    handler:async(convexToJson,args)=>{
        const taskId=await convexToJson.db.insert("tasks",{text:args.text,completed:false})
        return taskId
    },
});

export const completeTask=mutation({
    args:{
        id:v.id("tasks"),
    },
    handler:async(ctx,args)=>{
        await ctx.db.patch(args.id,{completed:true});
    },
});
export const deleteTask=mutation({
     args:{
        id:v.id("tasks"),
    },
    handler:async(ctx,args)=>{
        await ctx.db.delete(args.id);
    },
});