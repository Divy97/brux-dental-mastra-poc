import { PrismaClient } from "@/lib/generated/prisma-nextjs";

const globalForPrisma = globalThis as unknown as {
  prismaNextJs: PrismaClient | undefined;
};

export const prismaNextJs =
  globalForPrisma.prismaNextJs ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaNextJs = prismaNextJs;
