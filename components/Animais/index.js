

/* export default function Animal({ animal, handleRemove }) {
    return (
        <View style={styles.animalContainer}>
            <View style={styles.animalInfo}>
                <Text style={styles.animalInfoHeader}>Codigo</Text>
                <Text style={styles.animalInfoValue}>{animal.id}</Text>
            </View>
            <View style={styles.animalInfo}>
                <Text style={styles.animalInfoHeader}>Raça</Text>
                <Text style={styles.animalInfoValue}>{animal.race}</Text>
            </View>
            <View style={styles.animalInfo}>
                <Text style={styles.animalInfoHeader}>Idade</Text>
                <Text style={styles.animalInfoValue}>{animal.age}</Text>
            </View>
            <View style={styles.animalInfo}>
                <Text style={styles.animalInfoHeader}>Ração</Text>
                <Text style={styles.animalInfoValue}>{animal.food}</Text>
            </View>
            <Button style={styles.removeAnimal}
                title={"X"}
                onPress={() => handleRemove(animal.id)}
            />
        </View>
    )
}*/


const styles = StyleSheet.create({
    animalContainer: {
        padding: '10px',
        margin: '10px',
        backgroundColor: 'red'
    }
})