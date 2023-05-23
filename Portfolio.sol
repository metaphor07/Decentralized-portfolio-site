// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.7.0 < 0.9.0;

//contract address:- 0xb94F9Ef3fdab7642Ed32b2b7D25C0F83E626b239


contract Portfolio{
    struct Project{
        uint id;
        string name;
        string description;
        string image;
        string githublink;
    }

     struct Education{
        uint id;
        string date;
        string degree;
        string knowledgeAcquired;
        string institutionName;
    }

    // create a fixed size array to store the struct data
    // for the fixed size data the gas value is low
    Project[3] public projects;
    Education[3] public educations;

    string public imageLink = "QmakiMrdzUSDgqp7ugn5PdRp2SdDWqk57b51djG1n3fQhc";
    string public description = "I am currently a third-year student at the TERII, krukshetra pursuing a B.Tech in Computer Science and Engineering will graduate in the summer of 2024. I am excited to intern with the Government in this summer and contribute to important role that will help to the Govt. projects. My long-term career goal is to become a good project handler so that I can build project that will help solve real life problems. I have the skills and knowledge needed to pursue this goal thanks to my academic training. My Development experience has given me the opportunity to apply these skills and develop important project skills, such as build Blockchain Application Development, MERN Application Development, Good Problem Solving Sills and have good understanding of DataStructure and Algorithms. The internship is also relevant to my academic goals. I am interested in this internship because I want to work with an organization and handle real life projects.";
    string public resumeLink = "QmPvSENmrxGYVgz7SPFGRRb1puJT4amMS7DQRj1acMjwtq";
    
    uint projectCount;
    uint educationCount;
    address public manager; //owner of the contract

    constructor(){
        manager=msg.sender;
    }

    modifier onlyManager(){
        require(msg.sender == manager, "You are not the manager");
        _;
    }

// calldata is cheaper as compare to meomory
// when argument is not changed inside the function then, we can use calldata
// if we pass {uint a} and it will change inside the function like {a=23} then calldata is not used
    function insertProject(string calldata _name, string calldata _description,string calldata _image,string calldata _githubLink) external{
        require(projectCount < 3, "Only 3 projects allowed");
        projects[projectCount] = Project(projectCount, _name, _description, _image, _githubLink);
        projectCount++;
    }

    function changeProject(string calldata _name, string calldata _description,string calldata _image,string calldata _githubLink, uint _projectCount) external{
        require(_projectCount>=0 && _projectCount < 3, "Only 3 projects allowed");
        projects[_projectCount] = Project(_projectCount, _name, _description, _image, _githubLink);
    }

    function allProjects() external view returns(Project[3] memory){
        return projects;
    }

    function insertEducation(string calldata _date,string calldata _degree,string calldata _knowledgeAcquired,string calldata _institutionName) external{
        require(educationCount < 3, "Only 3 Education allowed");
        educations[educationCount] = Education(educationCount, _date, _degree, _knowledgeAcquired, _institutionName);
        educationCount++;
    }

        function changeEducation(string calldata _date,string calldata _degree,string calldata _knowledgeAcquired,string calldata _institutionName, uint _educationCount) external{
        require(_educationCount >= 0 && _educationCount < 3, "Only 3 Education allowed");
        educations[_educationCount] = Education(_educationCount, _date, _degree, _knowledgeAcquired, _institutionName);
    }

    function allEducation() external view returns(Education[3] memory){
        return educations;
    }

    function changeDescription(string calldata _description) external {
        description = _description;
    }

     function changeResume(string calldata _resume) external onlyManager{
        resumeLink = _resume;
    }

      function changeImage(string calldata _image) external onlyManager{
        imageLink = _image;
    }

    function donate() public payable{
        payable(manager).transfer(msg.value);
    }
}