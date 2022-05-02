import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonIcon from "../components/ButtonIcon";
import Container from "../components/Container";
import icons from "../constants/icons";
import { SIZES, FONTS, COLORS } from "../constants/theme";
import { userBackHandler } from "../hooks/useBackHandler";
import { useTask } from "../hooks/useTask";
import { StatisticsScreenProps } from "../interfaces/navigator";
import { getMostRecentTask, getOldestTask } from "../utils/task";

const StatisticsScreen:React.FC<StatisticsScreenProps> = ({ navigation }) => {
  userBackHandler({ isHome: false })
  const { state: { tasks } } = useTask()

  const onGoBack = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <View style={styles.header}>
        <ButtonIcon
          size={22}
          icon={icons.arrow}
          onPress={onGoBack}
          style={styles.backButton}
        />
        <Text style={styles.headerTitle}>
          Estadísticas
        </Text>
        <View />
      </View>
      <View
        style={styles.content}
      >
        <View
          style={styles.card}
        >
          <Text style={styles.title}>
            Notas
          </Text>
          <Text style={styles.title2}>
            {tasks.length}
          </Text>
        </View>
        <View
          style={styles.card}
        >
          <Text style={styles.title}>
            Nota más reciente
          </Text>
          <Text style={styles.title2}>
            {getMostRecentTask(tasks)}
          </Text>
        </View>
        <View
          style={styles.card}
        >
          <Text style={styles.title}>
            Nota más antigua
          </Text>
          <Text style={styles.title2}>
            {getOldestTask(tasks)}
          </Text>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.padding / 2,
  },
  headerTitle: {
    ...FONTS.subtitle,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center'
  },
  backButton: {
    transform: [{ rotate: '180deg' }],
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.padding / 2
  },
  card: {
    padding: SIZES.padding / 2,
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    margin: SIZES.base,
    justifyContent: "space-between",
  },
  title: {
    ...FONTS.subtitle,
    fontWeight: "bold"
  },
  title2: {
    ...FONTS.title,
    fontWeight: "bold"
  },
})

export default StatisticsScreen;