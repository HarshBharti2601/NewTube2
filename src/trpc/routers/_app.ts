
import { categoriesRouter } from '@/modules/categories/servers/procedures';
import { createTRPCRouter,protectedProcedure } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';

export const appRouter = createTRPCRouter({
  studio:studioRouter,
  videos:videosRouter,
  categories:categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;