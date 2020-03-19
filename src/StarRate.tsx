import * as React from "react";
import { ReactComponent as FullStar } from "./star-full.svg";
import { ReactComponent as HalfStar } from "./star-half.svg";
import { ReactComponent as EmptyStar } from "./star-empty.svg";
import { ReactComponent as Reset } from "./reset.svg";
import "./StarRate.sass";

interface Props {
  onChange: (rate: number) => void;
  value: number;
}

const getRate = (x: number): number => Math.min(5, Math.ceil(x / 18.5) / 2);
const toShowable = (x: number): number => Math.min(5, Math.round(x * 2) / 2);

const StarRate: React.FC<Props> = ({ onChange, value }) => {
  const [showableValue, setShowableValue] = React.useState<number>(value);

  // 점수 초기화
  const reset = React.useCallback(() => {
    onChange(0);
  }, [onChange]);

  // 별 onClick 이벤트
  const onClick: React.MouseEventHandler<SVGSVGElement> = React.useCallback(
    e => {
      onChange(getRate(e.pageX));
    },
    [onChange]
  );

  // 별에 마우스 올렸을 때 이벤트
  const onMouseMove: React.MouseEventHandler<SVGSVGElement> = React.useCallback(
    e => {
      if (getRate(e.pageX) !== showableValue)
        setShowableValue(getRate(e.pageX));
    },
    [showableValue]
  );

  // 별에서 마우스 떼었을 때 value로 초기화
  const onMouseLeave: React.MouseEventHandler<SVGSVGElement> = React.useCallback(() => {
    setShowableValue(value);
  }, [value]);

  // value가 바뀔 때마다 보이는 값 조정
  React.useEffect(() => {
    setShowableValue(toShowable(value));
  }, [value]);

  return (
    <div className="app">
      <div {...{ onMouseMove, onMouseLeave }} className="container">
        {Array.from({ length: Math.floor(showableValue) }, (_, i) => {
          return (
            <FullStar
              key={"FullStar" + (i + 1)}
              {...{ onClick }}
              className="pointer left"
              width={32}
              height={32}
            />
          );
        })}
        {showableValue % 1 === 0.5 && (
          <HalfStar
            {...{ onClick }}
            key={"HalfStar" + Math.floor(showableValue + 1)}
            className="pointer left"
            width={32}
            height={32}
          />
        )}
        {showableValue < 5 &&
          Array.from({ length: Math.floor(5 - showableValue) }, (_, i) => {
            return (
              <EmptyStar
                key={"EmptyStar" + Math.ceil(showableValue + i + 1)}
                {...{ onClick }}
                className="pointer left"
                width={32}
                height={32}
              />
            );
          })}
      </div>
      <Reset
        onClick={reset}
        className="pointer more-left"
        width={16}
        height={16}
      />
    </div>
  );
};

export default StarRate;
