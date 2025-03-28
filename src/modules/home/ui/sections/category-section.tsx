"use client";

import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { FilterCarouselProps } from "@/components/filter-carousel";
import { dataTagSymbol } from "@tanstack/react-query";
import  { useRouter } from "next/navigation";

interface CategorySectionProps{
    categoryId?:string;
}

export const CategorySection=({categoryId}:CategorySectionProps)=>{
    
    return(
        <Suspense fallback={<CategorisesSkeleton/>}>
            {/* <ErrorBoundary fallback={<p>Error...</p>}> */}
               <CategorySectionSuspense categoryId= {categoryId}/> 
            {/* </ErrorBoundary> */}
        </Suspense>
    )
}

const CategorisesSkeleton = ()=>{
    return <FilterCarouselProps isLoading data={[]} onSelect={()=>{}}/>
}

 const CategorySectionSuspense = ({categoryId}:CategorySectionProps) =>{
    const router = useRouter();
    const [categories] = trpc.categories.getMany.useSuspenseQuery();
    const data = categories.map(({name,id})=>({
        value:id,
        label:name,
    }));

    const onSelect = (value:string|null)=>{
        const url = new URL(window.location.href);

        if(value){
            url.searchParams.set("categoryId",value);
        }else{
            url.searchParams.delete("categoryId");
        }
    

    router.push(url.toString());
   };

    return<FilterCarouselProps onSelect={onSelect} value ={categoryId} data={data}/>
    
 }