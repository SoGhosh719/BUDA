import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, MessageCircle, Clock, Bookmark, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

const menuItems = [
  {
    id: '1',
    title: 'Settings',
    icon: Settings,
    color: '#2196F3',
  },
  {
    id: '2',
    title: 'Chat History',
    icon: MessageCircle,
    color: '#4CAF50',
  },
  {
    id: '3',
    title: 'Recent Topics',
    icon: Clock,
    color: '#FF9800',
  },
  {
    id: '4',
    title: 'Saved Responses',
    icon: Bookmark,
    color: '#9C27B0',
  },
  {
    id: '5',
    title: 'Help & Support',
    icon: HelpCircle,
    color: '#607D8B',
  },
  {
    id: '6',
    title: 'Sign Out',
    icon: LogOut,
    color: '#F44336',
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop' }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.email}>john.doe@clarku.edu</Text>
              <Text style={styles.role}>Computer Science, Class of 2025</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => {}}>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <item.icon size={24} color="#ffffff" />
              </View>
              <Text style={styles.menuItemText}>{item.title}</Text>
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
    backgroundColor: '#ffffff',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#0066CC',
  },
  menuContainer: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuItemText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
  },
});