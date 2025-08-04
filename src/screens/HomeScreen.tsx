import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import JobPostCard from '../components/JobPost'

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <JobPostCard />
    </Container>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
