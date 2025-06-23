"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvaildText(text) {
  return !text || text.trim() === "";
}

//getting data as input
export  async function shareMeal(preState,formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  //server side validation data

  if (
    isInvaildText(meal.title) ||
    isInvaildText(meal.summary) ||
    isInvaildText(meal.instructions) ||
    isInvaildText(meal.creator) ||
    isInvaildText(meal.creator_email)||
    !meal.creator_email.includes('@')||
    !meal.image || 
    meal.image.size===0
  ){
    return {
        message : 'Invalid Input!'
    }
  }
    await saveMeal(meal);
    //for clear the recent caches and update it
    
    revalidatePath('/meals');
    redirect("/meals");
}
