import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import {
    Widget,
    WidgetContent,
    WidgetTitle,
} from "@/components/ui/widget";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

function getTimeInTimezone(tz: string) {
    return new Date().toLocaleTimeString("en-US", {
        timeZone: tz,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}

function isDaytime(tz: string): boolean {
    const hour = new Date().toLocaleString("en-US", {
        timeZone: tz,
        hour: "numeric",
        hour12: false,
        hourCycle: "h23",
    });
    const h = parseInt(hour, 10);
    return h >= 6 && h < 20;
}

export default function ClockWidget() {
    const [, setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTick((t) => t + 1), 10000);
        return () => clearInterval(interval);
    }, []);

    const nycTime = getTimeInTimezone("America/New_York");
    const klTime = getTimeInTimezone("Asia/Kuala_Lumpur");
    const isDayNYC = isDaytime("America/New_York");
    const isDayKL = isDaytime("Asia/Kuala_Lumpur");

    return (
        <Widget className="w-[200px] aspect-square">
            <WidgetContent className="flex-col justify-between gap-3 h-full">
                <div className="flex w-full flex-col gap-2">
                    <div className="flex w-full items-center justify-between">
                        <Label className="text-slate-500 text-xs font-normal">New York</Label>
                        {isDayNYC ? (
                            <SunIcon className="size-4 text-amber-500" />
                        ) : (
                            <MoonIcon className="size-4 text-indigo-400" />
                        )}
                    </div>
                    <WidgetTitle className="text-xl">{nycTime}</WidgetTitle>
                </div>
                <Separator />
                <div className="flex w-full flex-col gap-2">
                    <div className="flex w-full items-center justify-between">
                        <Label className="text-slate-500 text-xs font-normal">Kuala Lumpur</Label>
                        {isDayKL ? (
                            <SunIcon className="size-4 text-amber-500" />
                        ) : (
                            <MoonIcon className="size-4 text-indigo-400" />
                        )}
                    </div>
                    <WidgetTitle className="text-xl">{klTime}</WidgetTitle>
                </div>
            </WidgetContent>
        </Widget>
    );
}
