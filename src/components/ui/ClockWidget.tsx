import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import {
    Widget,
    WidgetContent,
    WidgetTitle,
} from "@/components/ui/widget";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

function getTimeForTimezone(now: Date, tz: string) {
    const time = now.toLocaleTimeString("en-US", {
        timeZone: tz,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    const h = parseInt(
        now.toLocaleString("en-US", { timeZone: tz, hour: "numeric", hour12: false, hourCycle: "h23" }),
        10,
    );
    return { time, isDay: h >= 6 && h < 20 };
}

export default function ClockWidget() {
    const [, setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTick((t) => t + 1), 60000);
        return () => clearInterval(interval);
    }, []);

    const now = new Date();
    const nyc = getTimeForTimezone(now, "America/New_York");
    const kl  = getTimeForTimezone(now, "Asia/Kuala_Lumpur");

    return (
        <Widget className="w-[200px] aspect-square">
            <WidgetContent className="flex-col justify-between gap-3 h-full">
                <div className="flex w-full flex-col gap-2">
                    <div className="flex w-full items-center justify-between">
                        <Label className="text-slate-500 text-xs font-normal">New York</Label>
                        {nyc.isDay ? (
                            <SunIcon className="size-4 text-amber-500" />
                        ) : (
                            <MoonIcon className="size-4 text-indigo-400" />
                        )}
                    </div>
                    <WidgetTitle className="text-xl">{nyc.time}</WidgetTitle>
                </div>
                <Separator />
                <div className="flex w-full flex-col gap-2">
                    <div className="flex w-full items-center justify-between">
                        <Label className="text-slate-500 text-xs font-normal">Kuala Lumpur</Label>
                        {kl.isDay ? (
                            <SunIcon className="size-4 text-amber-500" />
                        ) : (
                            <MoonIcon className="size-4 text-indigo-400" />
                        )}
                    </div>
                    <WidgetTitle className="text-xl">{kl.time}</WidgetTitle>
                </div>
            </WidgetContent>
        </Widget>
    );
}
