import { prisma } from "@/lib/prisma";
import WorkClient from "./workClient";
export default async function Work() {
    const projects = await prisma.project.findMany({
        orderBy: {
            createdAt: "asc",
        },
    });
    
    return <WorkClient projects={projects} />;
}