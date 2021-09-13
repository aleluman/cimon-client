import { RolePosition, Position, Size } from "../types/editor";

/** Calculates offset between two angles */
const getOffset = (min: number, max: number, value: number) => {
  const delta = max - min;
  return (value - min) / delta;
};

/** Calculates points to draw the arcs of the curve */
const getPoints = (
  startRole: Position,
  endRole: Position,
  angle: number,
  { width, height }: Size
) => {
  if (angle <= -135) {
    const offset = getOffset(-180, -135, angle);
    return {
      startX: startRole.x,
      startY: startRole.y + (offset * height) / 2 + height / 2,
      endX: endRole.x + width,
      endY: endRole.y - (height / 2) * offset + height / 2,
    };
  }
  if (angle <= -45) {
    const offset = getOffset(-135, -45, angle);
    return {
      startX: startRole.x + width * offset,
      startY: startRole.y + height,
      endX: endRole.x - width * offset + width,
      endY: endRole.y,
    };
  }

  if (angle <= 45) {
    const offset = getOffset(-45, 45, angle);
    return {
      startX: startRole.x + width,
      startY: startRole.y - height * offset + height,
      endX: endRole.x,
      endY: endRole.y + height * offset,
    };
  }
  if (angle <= 135) {
    const offset = getOffset(45, 135, angle);
    return {
      startX: startRole.x + width - width * offset,
      startY: startRole.y,
      endX: endRole.x + width * offset,
      endY: endRole.y + height,
    };
  }
  const offset = getOffset(135, 180, angle);
  return {
    startX: startRole.x,
    startY: startRole.y + (offset * height) / 2,
    endX: endRole.x + width,
    endY: endRole.y - (height / 2) * offset + height,
  };
};

/** Calculates how much the arc should curve */
const getCurveOffset = (a: number, b: number, angle: number) => {
  return (
    Math.abs(((Math.abs(Math.abs(angle - 22.5) - 90) % 45) - 22.5) / 22.5) * (5 + 0.5 * (a - b))
  );
};

/** Calculates the d atribute of the path */
const getCurve = (startX: number, startY: number, endX: number, endY: number, angle: number) => {
  if ((angle > -45 && angle <= 45) || angle > 135 || angle <= -135) {
    const curveOffset = getCurveOffset(endX, startX, angle);
    return `M ${startX} ${startY}
            C ${startX + curveOffset} ${startY}
              ${endX - curveOffset} ${endY}
              ${endX} ${endY}`;
  }
  const curveOffset = getCurveOffset(endY, startY, angle);
  return `M ${startX} ${startY}
          C ${startX} ${startY + curveOffset}
            ${endX} ${endY - curveOffset}
            ${endX} ${endY}`;
};

/* Calculates a path when the role has a relationship with itself */
const getCircle = (position: Position) => {
  return `M${position.x + 16 * 8},${position.y + 30} a30,30 0 1,0 -30,-30`;
};

/** Calculates an SVG path between two roles */
export const getPath = (
  roleWidth: number,
  roleHeight: number,
  startRole?: RolePosition,
  endRole?: RolePosition
) => {
  if (startRole && endRole) {
    if (startRole.id === endRole.id) return getCircle(startRole);
    const angle = (-Math.atan2(endRole.y - startRole.y, endRole.x - startRole.x) * 180) / Math.PI;
    const { startX, startY, endX, endY } = getPoints(startRole, endRole, angle, {
      width: roleWidth,
      height: roleHeight,
    });
    return getCurve(startX, startY, endX, endY, angle);
  }
  return "";
};

/** Calculates angle between two points. */
export const getAngle = (cx: number, cy: number, ex: number, ey: number) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const theta = Math.atan2(dy, dx);
  return theta;
};
