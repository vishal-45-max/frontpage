import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase
  .from('cabins')
  .select('*')
    if(error){
        console.error(error)
        throw new Error("cabin could not loading")
    }
    return data;
}