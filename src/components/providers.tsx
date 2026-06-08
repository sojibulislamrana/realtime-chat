"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const Providers = () => {
    const [queryClient] = useState(()=> new QueryClient())

    return <QueryClientProvider client={queryClient}></QueryClientProvider>
}