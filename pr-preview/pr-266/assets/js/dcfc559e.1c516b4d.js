"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4205"],{22488:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"additional-material/steffen/java-2/exam-preparation/2024","title":"2024","description":"","source":"@site/docs/additional-material/steffen/java-2/exam-preparation/2024.md","sourceDirName":"additional-material/steffen/java-2/exam-preparation","slug":"/additional-material/steffen/java-2/exam-preparation/2024","permalink":"/java-docs/pr-preview/pr-266/additional-material/steffen/java-2/exam-preparation/2024","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/steffen/java-2/exam-preparation/2024.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"2024","description":"","sidebar_position":30,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"2023","permalink":"/java-docs/pr-preview/pr-266/additional-material/steffen/java-2/exam-preparation/2023"},"next":{"title":"Projektbericht","permalink":"/java-docs/pr-preview/pr-266/additional-material/steffen/java-2/project-report"}}'),i=r("85893"),t=r("50065");let a={title:2024,description:"",sidebar_position:30,tags:[]},l=void 0,d={},o=[{value:"Aufgabe 1 - Optional",id:"aufgabe-1---optional",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:3},{value:"Hinweise zur Klasse Car",id:"hinweise-zur-klasse-car",level:3},{value:"L\xf6sung",id:"l\xf6sung",level:3},{value:"Aufgabe 2 - Lambdafunktionen",id:"aufgabe-2---lambdafunktionen",level:2},{value:"Klassendiagramm",id:"klassendiagramm-1",level:3},{value:"Hinweise zur Klasse ExamTask02",id:"hinweise-zur-klasse-examtask02",level:3},{value:"L\xf6sung",id:"l\xf6sung-1",level:3},{value:"Aufgabe 3 - Streams",id:"aufgabe-3---streams",level:2},{value:"Klassendiagramm",id:"klassendiagramm-2",level:3},{value:"Hinweise zur Klasse Professor",id:"hinweise-zur-klasse-professor",level:3},{value:"Hinweise zur Klasse Student",id:"hinweise-zur-klasse-student",level:3},{value:"Hinweise zur Klasse University",id:"hinweise-zur-klasse-university",level:3},{value:"L\xf6sung",id:"l\xf6sung-2",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"F\xfcr die Klausur am PC mit IDE gibt es kein Cheatsheet mehr."}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-1---optional",children:"Aufgabe 1 - Optional"}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n\n  Car -- Task01\n\n  class Car {\n    +make: String\n    +model: String\n    +addition: Optional~String~\n    +Car(make: String, model: String)\n    +Car(make: String, model: String, addition: String)\n    +print() void\n  }\n\n  class Task01 {\n    +main(args: String[])void$\n  }"}),"\n",(0,i.jsx)(n.h3,{id:"hinweise-zur-klasse-car",children:"Hinweise zur Klasse Car"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Die Konstruktoren sollen alle Attribute initialisieren. Verwende die korrekten\nMethoden der Optional Klasse, sodass kein Fehler ausgel\xf6st wird, falls eine\nNull Referenz f\xfcr addition \xfcbergeben wird."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.strong,{children:"print"})," soll das Objekt auf der Konsole ausgeben. Ist eine\naddition vorhanden soll diese ber\xfccksichtigt werden, andernfalls soll nur die\nMarke und der Name ausgegeben werden."]}),"\n",(0,i.jsx)(n.p,{children:"Beispiel:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"BMW 320i\nMercedes-Benz G63 AMG\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Erstelle eine ausf\xfchrbare Klasse in der ein Auto mit der Marke "BMW", dem Modell\n"440i" und dem Zusatz "M" initialisiert wird. Gib das Auto in der Konsole aus.\nEntferne den Zusatz von dem Auto und gebe das Auto erneut in der Konsole aus.'}),"\n",(0,i.jsx)(n.h3,{id:"l\xf6sung",children:"L\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class Car {\n    public String make;\n    public String model;\n    public Optional<String> addition;\n\n    public Car(String make, String model) {\n        this.make = make;\n        this.model = model;\n        this.addition = Optional.empty();\n    }\n\n    public Car(String make, String model, String addition) {\n        this.make = make;\n        this.model = model;\n        this.addition = Optional.ofNullable(addition);\n    }\n\n    public void print() {\n        if (addition.isPresent()) {\n            System.out.println(make + " " + model + " " + addition.get());\n        } else {\n            System.out.println(make + " " + model);\n        }\n    }\n}\n\npublic class ExamTask01 {\n    public static void main(String[] args) {\n        Car beamer = new Car("BMW", "440i", "M");\n        beamer.print();\n        beamer.addition = Optional.empty();\n        beamer.print();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-2---lambdafunktionen",children:"Aufgabe 2 - Lambdafunktionen"}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm-1",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n  Computer -- Task02\n\n  class Computer {\n      <<record>>\n      +cpuCores int\n      +GhzPerCore double\n      +ram int\n      +canItRunCrysis ?$\n      +doubleRam ?$\n\n      +hasMinimumGhzSum(ghzSum: int)$ Predicate~Computer~\n      +getComputers()$ Stream~Computer~\n  }\n\n  class Task02 {\n      +main(args: String[])$ void\n  }"}),"\n",(0,i.jsx)(n.p,{children:"Im Klassendiagramm sind nicht alle Datentypen angegeben. Verwende f\xfcr alle\nfehlenden Datentypen eine adequates funktionales Interface."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Das Attribut ",(0,i.jsx)(n.strong,{children:"canItRunCrysis"})," soll eine Lambdafunktion enthalten die\nermittelt, ob ein Computer mindestens 4 Kerne und 16 GB RAM hat, damit das\nSpiel Crysis ausgef\xfchrt werden kann."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Das Attribut ",(0,i.jsx)(n.strong,{children:"doubleRam"})," soll eine Lambdafunktion enthalten, die ein\nbestehenden Computer in einen verbesserten Computer umwandelt. Bei der\nUmwandlung soll der RAM verdoppelt werden."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.strong,{children:"hasMinimumGhzSum"})," soll eine Lambdafunktion zur\xfcckgeben, welche\nermittelt, ob die Gigaherzsumme dem Parameter entspricht. Die Gigaherzsumme\nist das Produkt von CPU Kernen und Gigaherz je Kern."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.strong,{children:"getComputers"})," soll einen Stream von einem einzelnen Computer\nmit frei gew\xe4hlten Werten zur\xfcckgeben."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"hinweise-zur-klasse-examtask02",children:"Hinweise zur Klasse ExamTask02"}),"\n",(0,i.jsx)(n.p,{children:"Verwende f\xfcr die nachfolgende Abfolge die Methoden der Klasse Computer."}),"\n",(0,i.jsx)(n.p,{children:"Erzeuge einen Stream von Computern und verdopple den RAM. Verwende einen Filter,\nsodass nur Computer \xfcbrig bleiben, welche Crysis ausf\xfchren k\xf6nnen und mindestens\neine Gigaherzsumme von 12 haben."}),"\n",(0,i.jsx)(n.h3,{id:"l\xf6sung-1",children:"L\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public record Computer(int cpuCores, double ghzPerCore, int ram) {\n\n    public static Predicate<Computer> canItRunCrysis = computer -> computer.cpuCores() >= 4\n            && computer.ram() >= 16;\n\n    public static Function<Computer, Computer> doubleRam = computer -> new Computer(computer.cpuCores(),\n            computer.ghzPerCore(), computer.ram() * 2);\n\n    public static Predicate<Computer> hasMinimumGhzSum(int ghzSum) {\n        return c -> c.cpuCores() * c.ghzPerCore() >= ghzSum;\n    }\n\n    public static Stream<Computer> getComputers() {\n        return Stream.of(new Computer(0, 0, 0));\n    }\n\n}\n\npublic class Task02 {\n    public static void main(String[] args) {\n        Computer.getComputers()\n                .map(Computer.doubleRam)\n                .filter(Computer.canItRunCrysis)\n                .filter(Computer.hasMinimumGhzSum(12));\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"aufgabe-3---streams",children:"Aufgabe 3 - Streams"}),"\n",(0,i.jsx)(n.h3,{id:"klassendiagramm-2",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n  direction TB\n\n  University -- Professor\n  University -- Student\n\n  class Professor {\n    <<record>>\n    +name: String\n    +age: int\n    +courses : List~String~\n  }\n\n  class Student {\n    <<record>>\n    +name: String\n    +age: int\n    +grades: Map~String, Double~\n  }\n\n  class University {\n    <<record>>\n    +professors: List~Professor~\n    +students: List~Student~\n\n    +q1() List~Double~\n    +q2() void\n    +q3() Map~Integer&sbquo; List~Professor~~\n    +q4(professorName: String) List~List~Student~~\n    +q5() List~String~\n  }\n"}),"\n",(0,i.jsx)(n.h3,{id:"hinweise-zur-klasse-professor",children:"Hinweise zur Klasse Professor"}),"\n",(0,i.jsx)(n.p,{children:"Jeder Professor kann durch einen Namen, das Alter und eine Liste von\nVorlesungen, welche er h\xe4lt beschrieben werden."}),"\n",(0,i.jsx)(n.h3,{id:"hinweise-zur-klasse-student",children:"Hinweise zur Klasse Student"}),"\n",(0,i.jsx)(n.p,{children:"Jeder Student kann durch einen Namen, das Alter und seine Noten beschrieben\nwerden. Der Schl\xfcssel entspricht dem Kurs und der Wert der Map der Note die er\nin diesem Kurs erreicht hat."}),"\n",(0,i.jsx)(n.h3,{id:"hinweise-zur-klasse-university",children:"Hinweise zur Klasse University"}),"\n",(0,i.jsx)(n.p,{children:"Die Universit\xe4t enth\xe4lt Professoren (professors) und Studenten (students).\nBenutze die Java Stream API, um die Anforderungen des Rektors zu erf\xfcllen."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"q1"})," Der Rektor m\xf6chte wissen, was f\xfcr eine Durchschnittsnote seine\nStudenten haben."]}),"\n",(0,i.jsx)(n.p,{children:"Die Methode soll die Durchschnittsnote je Student ermitteln."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"q2"})," Der Rektor ist in People & Culture Laune und will seinen 3 \xe4ltesten\nMathe-Professoren die Big Bang Theory Blu Ray Sammlung schenken."]}),"\n",(0,i.jsx)(n.p,{children:"Die Methode soll die drei \xe4ltesten Mathe-Professoren ermitteln und f\xfcr jeden\nProfessor folgenden Gru\xdf auf der Konsole ausgeben:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"6138 Minuten Bazinga Spa\xdf an dich Steffen.\n"})}),"\n",(0,i.jsx)(n.p,{children:'Ein Professor gilt als Mathe-Professor, sofern er eine Vorlesung in "Math"\ngibt.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"q3"})," Der Rektor leidet unter Kontrollwahn. Er will wissen wie viele\nProfessoren nur zwei oder weniger Vorlesungen halten und nach Alter\ngruppieren. Er glaubt, dass Boomer Professoren wenig machen."]}),"\n",(0,i.jsx)(n.p,{children:"Die Methode soll ermittlen, wieviele Professoren wenig Vorlesungen halten und\ndiese nach Alter gruppieren."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"q4"})," Der Rektor leidet immer noch unter Kontrollwahn und m\xf6chte eine\nabh\xe4nging vom Parameter professorName f\xfcr jeden Professor herausfinden, welche\nStudenten seine Vorlesung besucht haben."]}),"\n",(0,i.jsxs)(n.p,{children:["Die Methode soll eine Liste von Listen zur\xfcckgeben. Zuerst sollen jene\n",(0,i.jsx)(n.strong,{children:"Professoren"})," ermittelt werden, die dem Parameter professorName entsprechen.\nAnschlie\xdfend soll f\xfcr jeden Professor eine Liste von Studenten ermittelt\nwerden, welche seine Vorlesung besucht haben."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"q5"})," Der Rektor leidet nun zus\xe4tzlich unter Gr\xf6\xdfenwahn und will seine\nUniversit\xe4t in eine Elite Universit\xe4t umwandeln. Alle Studenten, die eine Note\nvon 1,5 oder schlechter haben sollen exmatrikuliert werden."]}),"\n",(0,i.jsx)(n.p,{children:"Die Methode soll alle Studenten ermitteln, welche in irgendeinem Kurs eine\nNote von 1,5 oder schlechter haben und deren Namen in Kleinbuchstaben\nzur\xfcckgeben. Die Liste soll keine doppelten Werte enthalten."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"l\xf6sung-2",children:"L\xf6sung"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public record University(List<Professor> professors, List<Student> students) {\n    public List<Double> q1Long() {\n        return students().stream()\n                .map(student -> {\n                    List<Double> grades = student.grades().values().stream().toList();\n                    var averageGrade = grades.stream().mapToDouble(Double::valueOf).average();\n                    if (averageGrade.isPresent()) {\n                        return averageGrade.getAsDouble();\n                    } else {\n                        return 0.0;\n                    }\n                })\n                .toList();\n    }\n\n    public List<Double> q1Short() {\n        return students().stream()\n                .map(student -> student.grades().values().stream()\n                        .mapToDouble(grade -> grade).average().orElse(0))\n                .toList();\n    }\n\n    public void q2() {\n        professors().stream()\n                .filter(p -> p.courses().stream().anyMatch(c -> c.equalsIgnoreCase("Math")))\n                .sorted((p1, p2) -> Integer.compare(p2.age(), p1.age()))\n                .limit(3)\n                .forEach(p -> System.out.println("6138 Minuten Bazinga Spa\xdf an dich " + p.name() + "."));\n    }\n\n    public Map<Integer, List<Professor>> q3() {\n        return professors.stream()\n                .filter(p -> p.courses().size() <= 2)\n                .collect(Collectors.groupingBy(p -> p.age()));\n    }\n\n    public List<List<Student>> q4(String professorName) {\n        return professors.stream()\n                .filter(professor -> professor.name().equals(professorName))\n                .map(professor -> students.stream()\n                        .filter(student -> student.grades().keySet().stream()\n                                .anyMatch(studentCourses -> professor.courses().stream()\n                                        .anyMatch(professorCourses -> studentCourses.equals(professorCourses))))\n                        .toList())\n                .toList();\n    }\n\n    public List<String> q5() {\n        return students.stream()\n                .filter(s -> s.grades().values().stream().anyMatch(grade -> grade >= 1.5))\n                .map(s -> s.name().toLowerCase())\n                .distinct().toList();\n    }\n\n}\n\npublic record Professor(String name, int age, List<String> courses) {}\n\npublic record Student(String name, int age, Map<String, Double> grades) {}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var s=r(67294);let i={},t=s.createContext(i);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);