"use client";

import { Switch } from "antd";
import React, { useState } from "react";

export default function Switcher() {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center justify-end gap-3 mt-4 text-[#4E4E4E]">
      <span className="text-base font-museomoderno font-bold">ACTIVE</span>
      <Switch
        checked={active}
        onChange={() => setActive(!active)}
        className="bg-orange-300"
      />
      <span className="text-base font-museomoderno font-bold">INACTIVE</span>
    </div>
  );
}
