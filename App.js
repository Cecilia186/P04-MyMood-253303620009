import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';

const moods = [
  { id: '1', name: 'Happy', emoji: '😊', color: '#FFE4A8', message: 'Keep smiling! Have a wonderful day!' },
  { id: '2', name: 'Neutral', emoji: '😐', color: '#D9D9F5', message: 'It is okay to have an ordinary day.' },
  { id: '3', name: 'Sad', emoji: '😢', color: '#BFDFFF', message: 'Take your time. Better days will come.' },
  { id: '4', name: 'Angry', emoji: '😠', color: '#FFC5C5', message: 'Take a deep breath and relax.' },
  { id: '5', name: 'Tired', emoji: '😴', color: '#E5D1F5', message: 'You deserve some rest today.' },
];

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');
  const [days, setDays] = useState(0);
  const [history, setHistory] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const theme = isDark
    ? {
        background: '#211D2B',
        card: '#342D40',
        text: '#FFFFFF',
        secondary: '#C7BBD8',
        input: '#453B53',
      }
    : {
        background: '#F8F3FF',
        card: '#FFFFFF',
        text: '#49365F',
        secondary: '#947EA9',
        input: '#F3ECFA',
      };

  // Submit mood
  const handleSubmit = () => {
    if (!selectedMood) {
      Alert.alert('Oops!', 'Please select your mood first!');
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      mood: selectedMood,
      note: note,
      date: new Date().toLocaleDateString('id-ID'),
    };

    setHistory(previousHistory => [newEntry, ...previousHistory]);
    setDays(previousDays => previousDays + 1);
    setSelectedMood(null);
    setNote('');

    Alert.alert('Success!', 'Your mood has been saved!');
  };

  // Reset all data
  const handleReset = () => {
    Alert.alert(
      'Reset History',
      'Are you sure you want to delete all mood records?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setSelectedMood(null);
            setNote('');
            setDays(0);
            setHistory([]);
          },
        },
      ]
    );
  };

  // History item
  const renderHistory = (item) => {
    const mood = moods.find(m => m.name === item.mood);

    return (
      <View
        key={item.id}
        style={[styles.historyItem, { backgroundColor: theme.input }]}
      >
        <Text style={styles.historyEmoji}>{mood ? mood.emoji : '💜'}</Text>

        <View style={{ flex: 1 }}>
          <Text style={[styles.historyMood, { color: theme.text }]}>
            {item.mood}
          </Text>

          <Text style={{ color: theme.secondary, fontSize: 12 }}>
            {item.date}
          </Text>

          {item.note !== '' && (
            <Text style={{ color: theme.text, marginTop: 4 }}>
              {item.note}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.appName, { color: theme.text }]}>
              MyMood ✨
            </Text>

            <Text style={[styles.subtitle, { color: theme.secondary }]}>
              A little space for your feelings.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.darkButton}
            onPress={() => setIsDark(previous => !previous)}
          >
            <Text style={{ fontSize: 22 }}>
              {isDark ? '☀️' : '🌙'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* DAY COUNTER */}
        <View style={styles.counterCard}>
          <Text style={styles.counterTitle}>
            Your Mood Journey
          </Text>

          <Text style={styles.counterNumber}>
            {days}
          </Text>

          <Text style={styles.counterDescription}>
            days of knowing yourself better 💜
          </Text>
        </View>

        {/* MOOD SELECTION */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          How are you feeling today?
        </Text>

        <View style={styles.moodContainer}>
          {moods.map(mood => (
            <TouchableOpacity
              key={mood.id}
              onPress={() => setSelectedMood(mood.name)}
              style={[
                styles.moodCard,
                { backgroundColor: theme.card },
                selectedMood === mood.name && {
                  backgroundColor: mood.color,
                  borderColor: '#9672C1',
                  borderWidth: 2,
                },
              ]}
            >
              <Text style={styles.moodEmoji}>
                {mood.emoji}
              </Text>

              <Text style={[styles.moodName, { color: theme.text }]}>
                {mood.name}
              </Text>

              {selectedMood === mood.name && (
                <Text style={styles.checkMark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* CONDITIONAL MESSAGE */}
        {selectedMood ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>
              {moods.find(m => m.name === selectedMood).message}
            </Text>
          </View>
        ) : (
          <Text style={[styles.hint, { color: theme.secondary }]}>
            Choose a mood that matches your feelings today.
          </Text>
        )}

        {/* NOTE INPUT */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Write a little note 📝
        </Text>

        <View style={[styles.noteCard, { backgroundColor: theme.card }]}>
          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: theme.input,
                color: theme.text,
              },
            ]}
            placeholder="What's on your mind today?"
            placeholderTextColor={theme.secondary}
            multiline
            maxLength={100}
            value={note}
            onChangeText={setNote}
          />

          <Text style={[styles.charCount, { color: theme.secondary }]}>
            {100 - note.length} characters left
          </Text>
        </View>

        {/* SUBMIT BUTTON */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>
            Save My Mood 💜
          </Text>
        </TouchableOpacity>

        {/* MOOD HISTORY */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Mood History 📖
        </Text>

        {history.length > 0 ? (
          history.map(item => renderHistory(item))
        ) : (
          <View style={[styles.emptyCard, { backgroundColor: theme.card }]}>
            <Text style={{ fontSize: 30 }}>🌷</Text>

            <Text style={{ color: theme.secondary, marginTop: 8 }}>
              No mood records yet.
            </Text>
          </View>
        )}

        {/* RESET BUTTON */}
        {days > 0 && (
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleReset}
          >
            <Text style={styles.resetText}>
              Reset All Records
            </Text>
          </TouchableOpacity>
        )}

        <Text style={[styles.footer, { color: theme.secondary }]}>
          Made with love ♡ MyMood App
        </Text>

      </ScrollView>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  appName: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 13,
    marginTop: 5,
  },

  darkButton: {
    backgroundColor: '#E8D9F7',
    padding: 12,
    borderRadius: 15,
  },

  counterCard: {
    backgroundColor: '#DCC9F2',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    marginBottom: 28,
  },

  counterTitle: {
    color: '#49365F',
    fontSize: 15,
    fontWeight: '600',
  },

  counterNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#49365F',
    marginVertical: 5,
  },

  counterDescription: {
    color: '#725C8C',
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 15,
  },

  moodCard: {
    width: '31%',
    minHeight: 100,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#EEE5F5',
  },

  moodEmoji: {
    fontSize: 30,
    marginBottom: 5,
  },

  moodName: {
    fontSize: 12,
    fontWeight: '600',
  },

  checkMark: {
    position: 'absolute',
    top: 5,
    right: 8,
    color: '#49365F',
    fontWeight: 'bold',
  },

  messageBox: {
    backgroundColor: '#E9DDF8',
    borderRadius: 14,
    padding: 15,
    marginBottom: 22,
  },

  messageText: {
    color: '#49365F',
    textAlign: 'center',
    fontWeight: '600',
  },

  hint: {
    textAlign: 'center',
    marginBottom: 22,
    fontSize: 12,
  },

  noteCard: {
    borderRadius: 18,
    padding: 15,
    marginBottom: 20,
  },

  textInput: {
    minHeight: 90,
    borderRadius: 12,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 14,
  },

  charCount: {
    textAlign: 'right',
    fontSize: 11,
    marginTop: 8,
  },

  submitButton: {
    backgroundColor: '#9672C1',
    padding: 17,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 28,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  historyEmoji: {
    fontSize: 30,
    marginRight: 15,
  },

  historyMood: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  emptyCard: {
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
  },

  resetButton: {
    borderWidth: 1,
    borderColor: '#D68A9A',
    padding: 14,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },

  resetText: {
    color: '#D68A9A',
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25,
    fontSize: 12,
  },
});