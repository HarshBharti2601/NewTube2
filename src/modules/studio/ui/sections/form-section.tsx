"use client";

import {trpc} from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface FormSectionProps{
    videoId:string;
}

export const FormSection = ({videoId}:FormSectionProps)=>{
    return(
        <Suspense fallback={<FormSectionSkeleton/>}>
            <ErrorBoundary fallback={<p>Error...</p>}>
               <FormSectionSuspense videoId={videoId}/> 
            </ErrorBoundary>
        </Suspense>
    );
};

const FormSectionSkeleton = ()=>{
    return <p>Loading...</p>
}

const FormSectionSuspense = ({videoId}:FormSectionProps)=>{
  const [video] = trpc.studio.getOne.useSuspenseQuery({id:videoId});

  return(
    <div className="flex items-center justify-between mb-6">
        <div>
            <h1>Video details</h1>
            <h1>Manage your video details</h1>
        </div>
    </div>
  );
};

