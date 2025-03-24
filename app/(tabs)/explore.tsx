import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GraduationCap, Book, Calendar, MapPin, Users, Info } from 'lucide-react-native';

const topics = [
  {
    id: '1',
    title: 'Academics',
    description: 'Course information, majors, and academic resources',
    icon: GraduationCap,
    color: '#4CAF50',
  },
  {
    id: '2',
    title: 'Library',
    description: 'Library services, research tools, and study spaces',
    icon: Book,
    color: '#9C27B0',
  },
  {
    id: '3',
    title: 'Events',
    description: 'Campus events, activities, and important dates',
    icon: Calendar,
    color: '#FF9800',
  },
  {
    id: '4',
    title: 'Campus',
    description: 'Campus navigation, facilities, and services',
    icon: MapPin,
    color: '#2196F3',
  },
  {
    id: '5',
    title: 'Student Life',
    description: 'Clubs, organizations, and student activities',
    icon: Users,
    color: '#E91E63',
  },
  {
    id: '6',
    title: 'FAQ',
    description: 'Common questions and university policies',
    icon: Info,
    color: '#607D8B',
  },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Topics</Text>
        <Text style={styles.headerSubtitle}>
          Select a topic to get specialized assistance
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.topicsGrid}>
          {topics.map(topic => (
            <TouchableOpacity
              key={topic.id}
              style={styles.topicCard}
              onPress={() => {}}>
              <View style={[styles.iconContainer, { backgroundColor: topic.color }]}>
                <topic.icon size={24} color="#ffffff" />
              </View>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDescription}>{topic.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666666',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topicCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  topicTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  topicDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    lineHeight: 20,
  },
});