import { supabase } from "./supabase";

async function findAll() {
    const { data } = await supabase
        .from("ingrediants")
        .select()
        .order("name")
        .returns<IngredientResponse[]>()

    return data ?? [];
}

async function findByIds(ids: string[]){
    const { data } = await supabase
    .from("ingrediants")
    .select()
    .in("id", ids)
    .order("name")
    .returns<IngredientResponse[]>()

    return data??[]
}

async function findByRecipeId(id: string){
    console.log(id)
    const { data, error } = await supabase
    .from("recipes_ingredients")
    .select("ingrediants (id, name, image)")
    .eq("recipe_id", id)
    .returns<{ingredients:IngredientResponse}[]>()
    console.log(data)
    return data ? data.map((item) => item.ingredients):[]
}

export { findAll, findByIds, findByRecipeId }