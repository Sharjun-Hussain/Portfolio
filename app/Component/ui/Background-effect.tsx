"use client";
import React from "react";
import PropTypes from "prop-types";

const BackgroundGradient = ({
  className = "",
  width = "w-64",
  height = "h-56",
  blur = "blur-3xl",
  gradientDirection = "bg-gradient-to-br",
  fromColor = "from-green-500/80",
  toColor = "to-green-900/30",
}) => {
  // Combine the classes together.
  const combinedClasses = `${gradientDirection} ${fromColor} ${toColor} ${blur} ${width} ${height} ${className}`;
  return <div className={combinedClasses}></div>;
};

export default React.memo(BackgroundGradient);
