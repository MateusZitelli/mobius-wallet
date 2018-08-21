import { StyleSheet } from 'react-native';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 44,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 44,
  },
  title: {
    color: colors.textDefault,
    fontFamily: fonts.helveticaNeue.bold,
    fontSize: fontSizes.secondaryTitle,
    marginBottom: 9,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: fontSizes.default,
    lineHeight: helpers.calculateLineHeight(fontSizes.default),
    textAlign: 'center',
  },
  errorTitle: {
    color: colors.error,
    fontFamily: fonts.helveticaNeue.bold,
    fontSize: fontSizes.secondaryTitle,
    marginBottom: 9,
    textAlign: 'center',
  },
  errorSubtitle: {
    color: colors.error,
    fontSize: fontSizes.default,
    lineHeight: helpers.calculateLineHeight(fontSizes.default),
    textAlign: 'center',
  },
  dotsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  dot: {
    borderRadius: 12,
    height: 24,
    marginLeft: 9,
    marginRight: 9,
    width: 24,
  },
  emptyDot: {
    borderColor: '#BEBEBE',
    borderRadius: 12,
    borderWidth: 1,
    height: 24,
    marginLeft: 9,
    marginRight: 9,
    width: 24,
  },
  errorDot: {
    borderColor: colors.error,
    borderRadius: 12,
    borderWidth: 1,
    height: 24,
    marginLeft: 9,
    marginRight: 9,
    width: 24,
  },
});