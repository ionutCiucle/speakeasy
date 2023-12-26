import color from 'color';

const raisinBlackBase = color('#2e282a');

export const Color = {
  Jonquill: '#ffc914',
  RaisinBlack: raisinBlackBase.hex(),
  RaisinBlackLight: raisinBlackBase.lighten(2.2).hex(),
  KellyGreen: '#76b041',
  Vetrdgris: '#17bebb',
  Flame: `#e4572e`,
  White: '#ffffff',
};

export const flex = (
  flexDirection: 'row' | 'column',
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'center',
  alignItems: 'flex-start' | 'flex-end' | 'stretch' | 'center',
) => ({
  flexDirection,
  justifyContent,
  alignItems,
});
