import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useUserRole = () => {
    const { user } = useUser();

    const userData = useQuery(api.user.getUsersByClerkId, {  // ← 's' here
        clerkId: user?.id || "",
    });

    const isLoading = userData === undefined;

    return {
        isLoading,
        isInterviewer: userData?.roles === "interviewer",
        isCandidate: userData?.roles === "candidate",
    };
};