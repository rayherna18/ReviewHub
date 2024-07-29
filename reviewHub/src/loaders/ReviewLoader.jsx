import { supabase } from "../client";

export const reviewLoader = async ({ params}) => {
    const {id } = params;

    try{
        const { data, error } = await supabase
        .from('reviews')
        .select("*")
        .eq('id', id)
        .single();

        if (error) throw error;

        return data;
    }
    catch (error) {
        console.error('Error fetching review:', error);
        throw new Response('Error fetching review', { status: 500 });
    }
};