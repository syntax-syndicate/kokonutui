import { ArrowRight, Sparkles, Code2, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Card01() {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <Card
                className="relative overflow-hidden border-indigo-100/80 dark:border-indigo-500/20 
                bg-gradient-to-br from-white/80 to-white/50 dark:from-zinc-900/80 dark:to-zinc-900/50 backdrop-blur-md"
            >
                <CardHeader className="space-y-4">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r 
                        from-indigo-50 to-indigo-100/50 dark:from-indigo-950/60 dark:to-indigo-900/30 w-fit"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            New Project
                        </span>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                            Create Project
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Set up your new project with just a few clicks.
                            We'll handle the deployment.
                        </p>
                    </div>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="space-y-2.5">
                        <Label
                            htmlFor="name"
                            className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
                        >
                            Project Name
                        </Label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                                <Boxes className="w-4 h-4 text-zinc-500/80 dark:text-zinc-400/80" />
                            </div>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter project name"
                                autoComplete="off"
                                className="pl-10 h-11 bg-white/50 
                                    dark:bg-zinc-800/30 
                                        border-indigo-100 dark:border-indigo-500/20
                                        focus:border-indigo-500 dark:focus:border-indigo-400
                                        focus-visible:ring-1 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400
                                        placeholder:text-zinc-600"
                            />
                        </div>
                    </div>

                    {/* Framework Select */}
                    <div className="space-y-2.5">
                        <Label
                            htmlFor="framework"
                            className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
                        >
                            Framework
                        </Label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                                <Code2 className="w-4 h-4 text-zinc-500/80 dark:text-zinc-400/80" />
                            </div>
                            <Select name="framework">
                                <SelectTrigger
                                    className="pl-10 h-11 bg-white/50 dark:bg-zinc-800/30 
                                            border-indigo-100 dark:border-indigo-500/20
                                            focus:border-indigo-500 dark:focus:border-indigo-400
                                            focus-visible:ring-1 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400"
                                >
                                    <SelectValue placeholder="Select framework" />
                                </SelectTrigger>
                                <SelectContent className="bg-white dark:bg-zinc-800 border-indigo-100 dark:border-indigo-500/20">
                                    <SelectItem value="next">
                                        Next.js
                                    </SelectItem>
                                    <SelectItem value="sveltekit">
                                        SvelteKit
                                    </SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">
                                        Nuxt.js
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="justify-end">
                    <Button
                        type="button"
                        className="bg-gradient-to-r from-indigo-200 to-indigo-300 
                                hover:from-indigo-300 hover:to-indigo-400 
                                text-white shadow-md shadow-indigo-500/10 
                                dark:shadow-indigo-500/5"
                    >
                        Create Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}