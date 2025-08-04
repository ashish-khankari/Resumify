import {StyleSheet} from 'react-native';
import React from 'react';
import { Container, JobPostCard } from '../components';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <JobPostCard />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
