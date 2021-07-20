import * as React from 'react';
import Svg, {SvgProps, Path, G, Ellipse} from 'react-native-svg';
type Props = SvgProps;

const Wind: React.FunctionComponent<Props> = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.306 481.306">
    <G fill="#fcb641">
      <Ellipse cx={341.632} cy={233.229} rx={136} ry={133.456} />
      <Path d="M336 65.453c-4.416 0-8-3.584-8-8v-48c0-4.416 3.584-8 8-8s8 3.584 8 8v48c0 4.416-3.584 8-8 8zM439.36 98.757a7.978 7.978 0 01-5.656-2.344 7.991 7.991 0 010-11.312l33.944-33.944c3.128-3.128 8.184-3.128 11.312 0s3.128 8.184 0 11.312l-33.944 33.944a7.978 7.978 0 01-5.656 2.344zM208.968 122.421a7.978 7.978 0 01-5.656-2.344l-33.936-33.936c-3.128-3.128-3.128-8.184 0-11.312s8.184-3.128 11.312 0l33.936 33.936a7.991 7.991 0 010 11.312 7.978 7.978 0 01-5.656 2.344z" />
    </G>
    <Path
      d="M426.208 361.453H383.56c.744-8 1.24-8.688 1.256-13.472.128-42.672-28.36-79.952-70.032-89.136-23.752-5.232-46.424-1.368-65.184 8.76-22.888-34.064-60.808-57.04-104.272-59.696-5.592-.768-11.256-1.224-17.056-1.224C57.432 206.685 0 265.949 0 339.005c0 38.072 15.688 72.304 40.648 96.44 22.072 24.488 52.72 40.312 89.008 42.944 0 0 295.432 1.464 296.552 1.464 29.712 0 53.792-27.208 53.792-59.208 0-31.984-24.088-59.192-53.792-59.192z"
      fill="#92c7d3"
    />
  </Svg>
);

export default React.memo(Wind);