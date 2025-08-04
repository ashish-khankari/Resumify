import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '../../Metrics';
import {colors, fontFamily, images} from '../theme';
import ImagIconRow from './ImagIconRow';

const JobPostCard = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.bookmark}>
          <Image source={images.bookmarkSaved} style={styles.bookmarkIcon} />
        </TouchableOpacity>

        <View style={styles.row}>
          <Image source={images.JobCardProfile} style={styles.profileImage} />
          <View style={styles.infoSection}>
            <Text style={styles.jobTitle}>Product Manager</Text>
            <Text style={styles.name}>Michael Chen</Text>

            <>
              <ImagIconRow icon={images.location} text='New york' iconBackgroundColor='#ded3e6' iconColor={colors.purple} />

              <ImagIconRow icon={images.work} text='8+ years experience'  iconColor={colors.lightGray} />

              <ImagIconRow icon={images.mail} text='michael.chen@email.com' />
            </>
          </View>
        </View>

        <Text style={styles.description}>
          Seeking product management roles in B2B SaaS companies. Strong
          background in agile development, user research, and data-driven
          decision making. Led teams of 10+ engineers.
        </Text>

        <View style={styles.footerRow}>
          <View style={styles.tagRow}>
            <Text style={styles.tagPurple}>Product Management</Text>
            <Text style={styles.tagOrange}>Full-time</Text>
          </View>
          <TouchableOpacity style={styles.pdfLink}>
            <Image source={images.document} style={styles.pdfIcon} />
            <Text style={styles.pdfText}>View PDF</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: moderateScale(4),
    overflow: 'hidden',
    borderRadius: moderateScale(20),
    backgroundColor: '#f5f3eb',
  },
  cardContainer: {
    backgroundColor: colors.white,
    padding: horizontalScale(16),
    borderRadius: moderateScale(20),
    elevation: 4,
  },
  bookmark: {
    position: 'absolute',
    top: horizontalScale(12),
    right: horizontalScale(12),
    zIndex: 1,
  },
  bookmarkIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
    gap: horizontalScale(12),
  },
  profileImage: {
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: horizontalScale(18),
    resizeMode: 'cover',
  },
  infoSection: {
    flex: 1,
  },
  jobTitle: {
    fontSize: horizontalScale(20),
    fontFamily: fontFamily.bold,
    color: colors.purple,
  },
  name: {
    fontSize: horizontalScale(16),
    color: colors.black,
    fontFamily: fontFamily.medium,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(2),
  },
  imageContainer: {
    width: horizontalScale(30),
    height: verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: '#ded3e6',
  },
  icon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  description: {
    fontSize: horizontalScale(14),
    color: colors.black,
    fontFamily: fontFamily.regular,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(12),
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagRow: {
    flexDirection: 'row',
    gap: horizontalScale(8),
  },
  tagPurple: {
    backgroundColor: '#F3E8FF',
    color: '#7E22CE',
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(12),
    fontSize: horizontalScale(12),
  },
  tagOrange: {
    backgroundColor: '#FFF3E0',
    color: '#F57C00',
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(12),
    fontSize: horizontalScale(12),
  },
  pdfLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfIcon: {
    width: horizontalScale(16),
    height: verticalScale(16),
    marginRight: horizontalScale(4),
    tintColor: colors.primary,
  },
  pdfText: {
    color: '#A855F7',
    fontSize: horizontalScale(13),
    fontFamily: fontFamily.medium,
  },
});

export default JobPostCard;
