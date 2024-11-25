

Software Requirements Specification
for
Intuicode
Version 1.00 approved
Prepared by Team Brilliance
10/6/24


Table of Contents                                                                              2
Table of Contents        ii
Revision History        ii
1.        Introduction        1
1.1        Purpose        1
1.2        Document Conventions        1
1.3        Intended Audience and Reading Suggestions        1
1.4        Product Scope        1
1.5        References        1
2.        Overall Description        2
2.1        Product Perspective        2
2.2        Product Functions        2
2.3        User Classes and Characteristics        2
2.4        Operating Environment        2
2.5        Design and Implementation Constraints        2
2.6        User Documentation        2
2.7        Assumptions and Dependencies        3
3.        External Interface Requirements        3
3.1        User Interfaces        3
3.2        Hardware Interfaces        3
3.3        Software Interfaces        3
3.4        Communications Interfaces        3
4.        System Features        4
4.1        System Feature 1        4
4.2        System Feature 2 (and so on)        4
5.        Other Nonfunctional Requirements        4
5.1        Performance Requirements        4
5.2        Safety Requirements        5
5.3        Security Requirements        5
5.4        Software Quality Attributes        5
5.5        Business Rules        5
6.        Other Requirements        5
Appendix A: Glossary        5
Appendix B: Analysis Models        5
Appendix C: To Be Determined List        6




Revision History
Name
	Date
	Reason For Changes
	Version
	Jakob Sholler
	10/9
	Reasons for changes, Compiling work together. In appropriate Sections
	1.01
	Jakob Sholler
	10/15
	 Recreated file to more resemble the sample as well as to Properly finish Missing sections for deliverable
	1.02


	Jakob Sholler
	10/19
	Moved over Ryans mock ups, then moved over Requirements numbers in the correct section, then filled in the requirements based on feedback in Project Feedback and Grading Document. 


Moved Rest of Requirements over that were missing and renumbered, see key at bottom for Map for original Dr greg copy, and Current.


Added appendix D for Miscelaneous information, added key for NFREQ
	

	Ryan O’Sullivan
	11/4
	Updated Section 4, providing more detail on the function requirement
	1.03
	

1. Introduction
   1. Purpose 
This Document is for release of IntuiCode 1.00. An App to help beginner programmers learn to read/understand code. It also contains some tools/features to help strengthen the skills being learned, such as Little Tests/ Problems they can either Work on to solve, or View the solution to See how that code works. This Document also contains all various requirements for intuiCode, Including the scope audience, Requirements and Non Functional Requirements, Description of Intuicode Mockups for interfaces. 
   2. Document Conventions
In comments On sidebar Origin: Means the original Author of the comment, Brought over from original document before reformatting. See Dr.Greg copy in Drive for original Comments and document. 
   3. Intended Audience and Reading Suggestions
The intended audience is for the Developers, Project manager, Designers, and Dr.Greg
   4. Product Scope
IntuiCode is designed to support beginner programmers in learning how to read and interpret code, while also improving their programming skills. By offering interactive tools and resources, the application provides users with Step by step guidance, code examples, and feedback on their programs. Some key features include an integrated code editor, Contextual explanations, and interactive quizzes. The app breaks down coding concepts into more manageable tasks, allowing the users to progress at their own pace. Additionally, the interactive problems and quizzes reinforce learning by providing instant feedback for the user. 
   5. References
Team Brilliance’s GIthub :  GitHub Link
Dr Greg copy   (Old SRS Before reformat/finishing missing sections)    Old SRS link
2. Overall Description
   1. Product Perspective
IntuiCode is an Independent self contained product its Purpose is to assist Beginner learners of programming to learn, A Few of the features are Community based  forums to ask for help or to aide, Colored syntax for easier Identification of code segments, Built in Resources.
   2. Product Functions
*Create An Account / Log in to Save or View current or previous progress from the app.
* Integrated code Editor: Having an integrated code editor, saves time, as well as allows for tests/quizzes to be given in the app.
*Resource Book
*Fill in others when task is done.)_S_D0ASD_SADAS)_DS_FSJAf-aFA(weird to  make it easy to see) 
   3. User Classes and Characteristics
One Class is logged in users This should be another large class that will Have all functionality for the app, including anything that requires data to be saved.


Another is Non-logged in users.  This will be A large Class, This will be the most used class, although  hopefully logged in will be. Users who are not logged in will have access to Almost all functionality. They should have access to any core functionality that does not require saving data. 


The Dev/Admin Class  will have all the features/Characteristics of the other classes, e.g  Accessing/ Saving Coursework. They will also need a higher level of security, Since they will have the ability to modify the contents of the app, and access any data or system logs.   




   4. Operating Environment
IntuiCode is Running on React, which includes HTML, CSS and Javascript. It should Run on Any up to date Major Browsers Chrome, Firefox, Microsoft Edge with React Installed and JavaScript Enabled. 
   5. Design and Implementation Constraints
<Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards (for example, if the customer’s organization will be responsible for maintaining the delivered software).> FILL IN LAter
   6. User Documentation
<List the user documentation components (such as user manuals, on-line help, and tutorials) that will be delivered along with the software. Identify any known user documentation delivery formats or standards.>FILL IN LATER
   7. Assumptions and Dependencies
Intuicode is developed using react, Which includes HTML, CSS and javascript, If javascript is disabled the app will not run 
3. External Interface Requirements
   1. User Interfaces
  

The Landing page when you are not logged in, prompting the user to log in.


  

The landing page when you’re logged in.
Top to Bottom: Buttons that allow you to switch tabs of what to do. A description of the current tab. The courses for the current tab


  

The Code Compiler for Challenges and Projects
Top to Bottom: Name and description of the Selected Course, and the Embedded trinket.io Python Interpreter to code the above problem.


  

The Resources tab, with a list of different topics to read about. 
  

The Courses tab that allows you to select a specific topic to learn. It also allows you to sort by skill level and course time. 




   2. Software Interfaces
<Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Describe the services needed and the nature of communications. Refer to documents that describe detailed application programming interface protocols. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way (for example, use of a global data area in a multitasking operating system), specify this as an implementation constraint.>FILL IN
   3. Communications Interfaces
<Describe the requirements associated with any communications functions required by this product, including e-mail, web browser, network server communications protocols, electronic forms, and so on. Define any pertinent message formatting. Identify any communication standards that will be used, such as FTP or HTTP. Specify any communication security or encryption issues, data transfer rates, and synchronization mechanisms.> FILL IN  
4. System Features
   1. Quizzes and Feedback
4.1.1        Description and Priority
The system provides quizzes and tests on programming topics, with immediate feedback on user answers (correct/incorrect). Priority: High.


4.1.2        Stimulus/Response Sequences
* Stimulus: User submits an answer to a quiz question.
* Response: System indicates whether the answer is correct or incorrect.


* Stimulus: User finishes a quiz.
* Response: System displays the user's score and detailed feedback for incorrect answers.
        
4.1.3        Functional Requirements
REQ-1: The system must provide quizzes and tests on programming topics.
REQ-2: The system must give feedback (Correct/Incorrect) after each question.


   2. Interactive Learning Features
4.2.1        Description and Priority
The app provides challenges, and progress tracking, including personalized paths. Priority: High.


4.2.2        Stimulus/Response Sequences
* Stimulus: User completes a challenge
* Response: System provides feedback and achievements to the user.


* Stimulus: User goes to the dashboard.
* Response: System displays completed lessons, streaks, and progress tracking.
        
* Stimulus: User selects a learning path.
* Response: System recommends lessons and challenges tailored to the user.


4.2.3        Functional Requirements
REQ-9: The system must provide a point or reward system for daily activity.
REQ-10: The system should track consecutive days of user engagement.
REQ-11: The system must allow users to review past sections.
REQ-12: The system should provide summaries from previous lessons.
REQ-13: The system must provide encouraging messages after the user completes tasks.
REQ-14: The system should reward users with achievements.
REQ-15: The app shall have lessons including explanations, examples, and interactive coding exercises.
REQ-16: The app shall allow users to write and test code directly within the lesson.
REQ-17: The app shall offer coding challenges at varying difficulty levels based on the user’s level.
REQ-18: The app shall provide daily challenges to warm up the user prior to working on the lessons.


   3. Code Editor Features
4.3.1        Description and Priority
The system provides a built-in coding environment with tools for testing, debugging, and personalization. Priority: Medium.


4.3.2        Stimulus/Response Sequences
* Stimulus: User writes code in the editor.
* Response: System highlights syntax and displays warnings or errors.


4.3.3        Functional Requirements
REQ-33: The app shall provide a built-in coding environment where users can write, run, and debug their code.
REQ-23: The app shall provide coloring for functions, variables, and imports, making code easy to read.
REQ-24: The app should display error messages or warnings in the code editor.


   4. Resources
4.4.1        Description and Priority
The app provides a community forum, external resources, and bookmarking. Priority: Medium.


4.4.2        Stimulus/Response Sequences
* Stimulus: User posts a question in the forum.
* Response: System adds the post and notifies relevant users for help.


* Stimulus: User bookmarks a resource.
* Response: System saves the resource for later access.


4.4.3        Functional Requirements
REQ-21: The app shall provide a community forum where users can ask for help or help others.
REQ-22: The system should allow users to like forum posts made by others.
REQ-27: The app shall provide links to resources that can help users learn more.
REQ-28: The app shall allow users to bookmark resources for later reference.




   5. Functional Requirements
        REQ-1 The System must provide quizzes and tests on programming topics.
        
REQ-2 The System must give feedback(Correct/Incorrect) After each question


REQ-3 The system must apply syntax highlighting to all supported programming languages.


REQ-4 The system must allow users to click on or search for functions and jump to their Definitions.


REQ -5 The system must provide keyboard shortcuts for navigating code sections.


REQ-6 The System should display notes in a way that does not interfere with the code view


REQ-7 The system should limit the number of pop-ups or notifications during use.


REQ-8 The System should limit the number of popups or notifications during use.


REQ -9 The system must provide a point or reward system on daily activity


Req -10 The system should track consecutive days of user engagement


REQ-11 The system must allow users to review past sections


REQ-12 The system should provide summaries from previous lessons


REQ-13 The system must provide encouraging messages after the user completes tasks


REQ-14 The system should rewards users with achievements


REQ-15 The app Shall have lessons including explanations, examples and interactive coding 
exercises,


REQ-16 The app shall allow users to write and test code directly within the lesson.


REQ-17 The app shall offer coding challenges at varying difficulty levels based on the users 
level


REQ-18 The app shall provide daily challenges to warm up the user prior to working on the 
lessons


REQ9 The app shall include tutorials that users can follow to create small 
projects(Calculator, little games, etc.


REQ-21 The app shall provide a community forum where users can ask for help or help 
others


REQ-22  The System should allow users to like forum posts made by others.


REQ-23 The app shall provide coloring for functions, variables, and imports making it easy 
to read


REQ-24 The app should also display error messages or warnings in the code editor.


REQ-25 The app shall track the users progress through lessons, quizzes, and challenges.        


REQ-26 The app shall display a dashboard showing complete lessons Along with a streak 
counter.


REQ-27 The app shall provide links to different resources that can help a user learn more. 


REQ-28 The app shall allow users to bookmark resources for later reference.


REQ-29 The app shall offer users the option to choose a learning path based on their 
interests and goals


REQ-30 The app shall recommend lessons and challenges based on their previous lessons.


REQ-31 The app shall include a feedback form for users to write any concerns they have
        
REQ-32 The app shall allow users to rate lessons and suggest improvements
        
REQ-33 The app shall provide a built-in coding environment where users can write, run, and 
debug their code.
        
REQ -34 The app shall allow users to choose a language for the coding environment


        REQ -35 The app shall provide an internal search functionality that returns results within 2 
seconds for content available within the app, such as language specific sections like arrays. 
5. Other Nonfunctional Requirements
   1. Performance Requirements
NFREQ-1 The system should be able to handle 1000 concurrent users with a response time of less than 2 seconds, 90% of the time. 


NFREQ-2 The apple should function with all major browsers. Firefox, Chrome, Safari


NFREQ-3 The app shall maintain an uptime of 99.9% excluding scheduled maintenance periods notified in advance. 




   2. Security Requirements
NFREQ-4 The System Shall require a password minimum of 8 characters, and include at least 1 symbol, number or capital letter.


NFREQ-5 The system Shall log users out after 2 hours of inactivity. 


NFREQ-6 The app shall include Encryption for data transmission (Https)


NFREQ-7 The app Shall comply with GDPR regulations 


NFREQ-8 The app shall include Secure User authentication. 


   3. Software Quality Attributes
Usability
        
Performance
        The app shall respond fast, With processing times of user requests of 2 seconds for 90 % of the time under peak loads. 

Scalability
        The system shall be designed to accommodate growth. Allowing of new features without significant impact on performance


Maintainability
        The Code shall be designed to help with maintenance and future updates, saving time for developers. 


Reliability
        The system will maintain a high level of reliability, being 99.9% uptime outside of scheduled maintenance. 


6. Other Requirements
NFREQ-9 The System Shall provide a mechanism for users to report bugs and provide feedback 


NFREQ-10 The system shall provide a guide on how to navigate the program after creating an account


NFREQ-11 The System shall send notifications to remind users to practice. 


NFREQ-12 After Overview Guide/Training  users can do tasks at at 90% correctness level. ` 


Appendix A: Glossary
Appendix B: Analysis Models


Appendix C: To Be Determined List
Appendix A: Glossary
Appendix B: Analysis Models
Index page numbers
3.2 Software Interfaces
3.3 Communication interfaces.


Appendix D:  Other Miscellaneous 
        
SRS_Template NFREQ #
	Dr. Greg copy (Old Document NFREQ#
	#1
	#1
	#2
	#3
	#3
	#13
	#4
	#2
	#5
	#8
	#6
	#14
	#7
	#14
	#8
	#14
	#9
	#4
	#10
	#6
	#11
	#7
	#12
	# N/.A
	
[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZMAAAG2CAYAAAC6fWvkAAAVOElEQVR4Xu3de8xtZX3gcWb6f5Npmkmm07+44wVQo5BWLqKiI0ZUlIYMIlRqJ1AtDla5OFZEbJNRU4pcbaAoDBHS6WmnlAKBCFKpIqAFPShHbh3kJjPcHTics+asBWuf/f5+L8ovvGvX/fh5kk/22t99efdhP89+2O91m23++591APCSpAAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSkAQFUKAFCVAgBUpQAAVSnQnG233Rb+VcU5SYNSoDlxYcOixTlJg1KgOXFhw6LFOUmDUqA5cWHDosU5SYNSoDlxYcOixTlJg1KgOXFhw6LFOUmDUqA5cWHDosU5SYNSoDlxYcOixTlJg1KgOXFhw6LFOUmDUqA5cWHDosU5SYNSoDlxYU9p3333HYznd9999+H8DjvssOI6e+65Z7rt6Jxzzun68drXvjZdtsz6ce2116Ze8fKXv7x705veNIiX/SKLc5IGpUBz4sKeUv9i2Y/x/BNPPDGcP/fcc4fz73vf+1ZcvppftM3k5z3eFxJv14+XupmM/z3jff+ii3OSBqVAc+LCntLee+89vNB96lOfGs7Pj/78gw8+ODvuvetd7+puu+227rzzzpu11TaTr371q9369eu7L3zhC7N2wAEHdN///veHy3bcccdZP/PMM4fTa665prvlllu63XbbrXvzm9/cbdiwYbjv+cd76KGHdj/60Y+6K664YkUfffjDHx4eS3+f4/32TjnllO6OO+7oDjvssHSb3nXXXZdu149LL710+Fg33XTT8Ljmb3PZZZcNj/GF7nO8j3EcfPDBs95/jDPOOGPYrPvHdfjhh6+4bK+99uouvPDC7oYbbuh23nnndL9Ti3OSBqVAc+LCnlo/Hn300dnxl7/85eF0PD8eb9y4cTj+4Q9/uKLHzSSOvj3++OMxdzvttNOq14+jf0Htr3f99dcP5/sNZxzz/463v/3tsz5/+Wpj/nZ77LFHvPjn3m4ct95663B69dVXr7jP3qte9arhsk984hOz68fbz4/x042rjXjfU4tzkgalQHPiwp7aOI488sjZC1c/+ncP45i/3lFHHdV99rOfHY4POuigFZtJ/25kvP5qH2P+/O23354uO+uss9L1xvPj6D9+b+zzTjzxxBW9f3z96Ht/fvy0U7zdPffck3o/xk32He94x+zyI444YjgeH8czzzyTbtt77LHHZv3UU08djl/3utfN7nv+Nv24//7702WXXHLJcLzrrrum+59SnJM0KAWaExf21B555JHhBav/FNT4ItaP8QX0k5/85KzF0b+wzm8mDz300HAcP8Y45s9v2rRpdnzfffcNx8ccc0y63nh+tRE/TtxMPv/5zw/nx08VXXnllave7oU2k/7TW/3xfvvtN7v85JNPHo7jiPe52ug/RTd/2fx1N2/ePDvun5P+eNw0X/3qV6f7n1KckzQoBZoTF/bUDjzwwNmL28UXXzy0p556anhx68d22203tHHE289vJlddddVw/MEPfnDFdeZve8ghhwzH69atm13Wf+qsP34xm0n8+POOP/74FdcZ313de++9P/M+7rrrrtT7MX4Bfn4zGT8t9ta3vjXdz2j8FFf/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U92ljzw+tCPuvi/ddlnF53IKcU7SoBRoTlzYU4gvUMtq3Ez+0933Dqc3PvnTbvOWzaM/HjeTSxp7dxKfyynEOUmDUqA5cWFPIb5ALatb/t/Tg/74ji0by3vvua/7jdvu7C5/7Inusi0byZ/e/3D3x/f9JN1umcXncgpxTtKgFGhOXNhTiC9QrTnp/rY2kHnxuZxCnJM0KAWaExf2FOILFMsjPpdTiHOSBqVAc+LCnkJ8gWJ5xOdyCnFO0qAUaE5c2FOIL1Asj/hcTiHOSRqUAs2JC3sK8QWK5RGfyynEOUmDUqA5cWHDosU5SYNSoDlxYcOixTlJg1KgOXFhw6LFOUmDUqA5cWHDosU5SYNSoDlxYcOixTlJg1KgOXFht+bII48cTjdv3ty94hWv6C666KLh/B577NGddNJJ3SWXXNJde+213U477TT0m2++uTvuuOOG41NPPbXbbbfduhNPPHF2fyeffHL3spe9bHb+rLPO6nbZZZfuQx/6UHfxxRfPen+7M844Yzg++OCDu1133XX4GOecc87Q+tMddtihO+GEE2a32Wuvvbrdd9+9O//887ujjz56aN/61rdml7cqzkkalALNiQu7NeNmMo7++PLLL+/222+/7gMf+MBw/swzz5xdf8OGDd1nPvOZ4fi0004bbtNfv7/OF7/4xe7qq6+e3U/v7LPP7p599tnuwQcfHM73m0h/us8++wz31W8k/fl+Axpvt379+uF048aNK+5rfJyHH374cNxvXIcddtiKy1sU5yQNSoHmxIXdmv7//A844IDuxhtvHF6o+3cnH//4x4fLDjrooOH09NNP73bcccfh+Nvf/vbwjuXAAw8c2vhiv2nTpu79739/9+53v3vWPvrRj842ibiZPPPMM93xxx8/3OaUU04ZrtNvOu985zu7K664ottzzz2H1o9169bNHm8/+s1k55137vbff//072lRnJM0KAWaExc2LFqckzQoBZoTFzYsWpyTNCgFmhMXNixanJM0KAWaExc2LFqckzQoBZoTFzYsWpyTNCgFmhMXNixanJM0KAWaExc2K21zyw+739x7n26b797W/bvP/3m6fMV1t1ynP/03//yDdBkvLM5JGpQCzYkLm5X+4+8cMvxdj/9w1IeG03972VXdtttv3/3qyX8ynP+1Y46dXXd+M9nmm9/ttt1uu+5XvnFjuk9WinOSBqVAc+LCZqVtbr39udPxD0bd9L3h/LCZ3Hhr95vveu4HH8frjLcZNpP++Pnr88LinKRBKdCcuLDJfv2/fXp2/O8/8kfD6a+e8Ml0vd6vfeZPh9N+M/n1E/44XU4W5yQNSoHmxIUNixbnJA1KgebEhQ2LFuckDUqB5sSFDYsW5yQNSoHmxIUNixbnJA1KgebEhQ2LFuckDUqB5sSFDYsW5yQNSoHmxIUNixbnJA1KAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAoCoFAKhKAQCqUgCAqhQAaMpvnfuVNRPveyYFAJoSN4SXIt73TAoANCVuCNHb//Ki7rdX6auJ9z2TAgBNiRvCfuddOJy++bz/kS6bt/e5F6QW73smBQCaMr8ZHHfh3wynH7tgXffGLZtKv2EcsOWdSd8+/vxl+2xpbzjvuY3k6K/8T5sJAKtvJh+54K+H033Py5vJfs9vJL1jn7+ezQTgl9z8ZvCHz28ORz3/jmPfLe9C3vL8p7v+4IKt70KO2XK9P9ry7mX+tjYTgF9icUN4KeJ9z6QAQFPihvBSxPueSQGApsQN4aWI9z2TAgBUpQAAVSkAQFUKAFCVAgBUpQAARf8fzDVgW7edR4MAAAAASUVORK5CYII=>
Copyright © 1999 by Karl E. Wiegers. Permission is granted to use, modify, and distribute this document.
