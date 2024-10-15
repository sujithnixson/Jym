angular.module('fitnessApp', [])
.controller('FitnessController', function() {
    this.newFitness = {};
    this.fitnessRecords = [];
    this.searchQuery = '';

    this.trackFitness = () => {
        if (this.newFitness.memberId && this.newFitness.date && this.newFitness.exercise && this.newFitness.duration) {
            this.fitnessRecords.push({
                memberId: this.newFitness.memberId,
                date: this.newFitness.date,
                exercise: this.newFitness.exercise,
                duration: this.newFitness.duration
            });
            // Clear form fields
            this.newFitness.memberId = '';
            this.newFitness.date = '';
            this.newFitness.exercise = '';
            this.newFitness.duration = '';
        } else {
            alert('Please fill out all fields.');
        }
    };

    this.deleteFitness = (index) => {
        this.fitnessRecords.splice(index, 1);
    };
});
