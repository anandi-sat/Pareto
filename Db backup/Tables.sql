CREATE TABLE `appointment` (
  `AppointmentID` int(11) DEFAULT NULL,
  `PatientID` varchar(50) DEFAULT NULL,
  `DoctorName` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `AppointmentDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `assets` (
  `AssetsId` int(11) NOT NULL,
  `ProgramName` varchar(45) DEFAULT NULL,
  `Channel` varchar(45) DEFAULT NULL,
  `Message` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`AssetsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `assetsdata` (
  `AssetsId` int(11) NOT NULL,
  `AssetName` varchar(50) DEFAULT NULL,
  `Value` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`AssetsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `campaign` (
  `CampaignId` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `NoOfEnrolledPatients` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CampaignId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `code` (
  `CodeId` int(11) NOT NULL,
  `Description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`CodeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `color` (
  `EngagementScore` int(11) NOT NULL,
  `color` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`EngagementScore`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `delivery_planner` (
  `PatientId` varchar(15) NOT NULL,
  `CampaingId` int(11) NOT NULL,
  `TouchpointStoryId` int(11) DEFAULT NULL,
  `TouchpointId` int(11) DEFAULT NULL,
  `Message` varchar(250) DEFAULT NULL,
  `ScheduledTime` datetime(6) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `Contact` varchar(100) DEFAULT NULL,
  `ResponceId` varchar(45) DEFAULT NULL,
  `DeliveryTime` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `patient` (
  `PatientId` varchar(50) DEFAULT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Nationality` varchar(45) DEFAULT NULL,
  `MaritalStatus` varchar(45) DEFAULT NULL,
  `InsuranceCompany1` varchar(45) DEFAULT NULL,
  `InsuranceCompany2` varchar(45) DEFAULT NULL,
  `Phone1` int(11) DEFAULT NULL,
  `Phone2` int(11) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Guardian` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `patient_campaign` (
  `PatientId` varchar(15) NOT NULL,
  `CampaignId` int(11) NOT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `EnrollmentDate` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`PatientId`,`CampaignId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `services` (
  `Sno` int(11) NOT NULL AUTO_INCREMENT,
  `PatientID` varchar(20) DEFAULT NULL,
  `PartofTheBody` varchar(50) DEFAULT NULL,
  `CodeID` int(11) DEFAULT NULL,
  `ServiceTaken` double DEFAULT NULL,
  `DoctorName` varchar(100) DEFAULT NULL,
  `Insurance` varchar(10) DEFAULT NULL,
  `Fee` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`Sno`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;

CREATE TABLE `touchpoint` (
  `TouchpointId` int(11) NOT NULL,
  `TouchpointStoryId` int(11) DEFAULT NULL,
  `AssetsId` int(11) DEFAULT NULL,
  `Sequence` int(11) DEFAULT NULL,
  `Interval` int(11) DEFAULT NULL,
  PRIMARY KEY (`TouchpointId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `touchpoint_story` (
  `CampaignId` int(11) NOT NULL,
  `TouchpointStoryId` int(11) NOT NULL,
  `TouchpointName` varchar(45) DEFAULT NULL,
  `Interval` int(11) DEFAULT NULL,
  PRIMARY KEY (`TouchpointStoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;