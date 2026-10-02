function getGrade(marks) {

    if (marks >= 90) {

        return "A+";

    } else if (marks >= 75) {

        return "A";

    } else if (marks >= 60) {

        return "B";

    } else if (marks >= 40) {

        return "C";

    } else {

        return "F";

    }

}