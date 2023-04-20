import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export const Tilt = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
};

// 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

// git remote set-url origin https://scuzzlebuzzle:<MYTOKEN>@github.com/scuzzlebuzzle/ol3-1.git

// git remote set-url origin https://Oluwaseun-Oyewole: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@github.com/Oluwaseun-Oyewole/FindTrends.git
