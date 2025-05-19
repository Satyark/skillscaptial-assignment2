import { Experience } from '@/types/hospitality';

export const hospitalityData: Experience[] = [
  {
    "id": "EXP001",
    "property": "Taj Palace Mumbai",
    "propertyType": "business",
    "isFlagship": true,
    "role": "Front Office Manager",
    "location": "Mumbai, India",
    "duration": "2022",
    "projects": [
      {
        "id": "P001",
        "title": "VIP Guest Protocol Upgrade",
        "overview": "Redesigned the arrival and service flow for VIP guests.",
        "launchDate": "2022-04-10",
        "tools": [
          "Opera PMS",
          "CRM Lite"
        ],
        "metrics": {
          "satisfactionScore": 4.9,
          "resolutionTimeHrs": 2
        },
        "initiatives": [
          {
            "name": "Fast Lane Check-in",
            "result": "40% reduction in wait time"
          },
          {
            "name": "Welcome Ambassador Program",
            "result": "+0.6 guest score uplift"
          }
        ],
        "guestFeedback": [
          5,
          5,
          4,
          4,
          3,
          5
        ],
        "modules": {
          "planning": {
            "summary": "Mapped the full guest journey and pain points.",
            "tags": [
              "journey_mapping",
              "vip_segmentation"
            ]
          },
          "operations": {
            "summary": "Trained 12-member team and monitored new process.",
            "tags": [
              "workflow_rollout",
              "feedback_loop"
            ]
          }
        },
        "team": [
          {
            "name": "Amit Sharma",
            "role": "Chef",
            "lead": true
          },
          {
            "name": "Neha Sinha",
            "role": "Service Manager",
            "lead": false
          }
        ],
        "imageUrl": "https://images.pexels.com/photos/5538618/pexels-photo-5538618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        "id": "P002",
        "title": "Mobile Check-in Rollout",
        "overview": "Implemented mobile check-in for loyalty guests.",
        "launchDate": "2022-08-01",
        "tools": [
          "Mobile App",
          "QR Code Kiosk"
        ],
        "metrics": {
          "adoptionRate": "65%",
          "timeSavedPerGuestMin": 3
        },
        "initiatives": [],
        "guestFeedback": [],
        "modules": {},
        "team": [],
        "documentLinks": [
          "https://example.com/checkin-process.pdf"
        ],
        "imageUrl": "https://images.pexels.com/photos/7820282/pexels-photo-7820282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    "id": "EXP002",
    "property": "Leela Palace Udaipur",
    "propertyType": "heritage",
    "isFlagship": false,
    "role": "F&B Operations Lead",
    "location": "Udaipur, India",
    "duration": "2021",
    "projects": [
      {
        "id": "P003",
        "title": "Theme Dining Launch",
        "overview": "Introduced regional cuisine theme nights.",
        "tools": [
          "POS Tracker",
          "Dining Reservations Tool"
        ],
        "metrics": {
          "avgCoversPerNight": 160,
          "upsellRate": "12%"
        },
        "initiatives": [
          {
            "name": "Rajasthani Nights",
            "result": "$12K revenue uplift/month"
          },
          {
            "name": "Chef Table Pairing",
            "result": "+0.4 NPS improvement"
          }
        ],
        "guestFeedback": [
          4,
          5,
          4,
          4
        ],
        "modules": {
          "conceptDesign": {
            "summary": "Worked with chefs and marketing to align themes.",
            "tags": [
              "menu_concept",
              "event_marketing"
            ]
          },
          "execution": {
            "summary": "Led rollout and service SOP alignment.",
            "tags": [
              "guest_feedback_loop",
              "staff_rotas"
            ]
          }
        },
        "team": [
          {
            "name": "Dev Raj",
            "role": "Sous Chef",
            "lead": false
          }
        ],
        "imageUrl": "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    "id": "EXP003",
    "property": "Four Seasons Bali",
    "propertyType": "resort",
    "isFlagship": false,
    "role": "Guest Experience Head",
    "location": "Bali, Indonesia",
    "duration": "2020",
    "projects": [
      {
        "id": "P004",
        "title": "Spa Booking Revamp",
        "overview": "Revamped spa booking to allow mobile reservations and preferences.",
        "tools": [
          "SpaSoft",
          "Customer Portal"
        ],
        "metrics": null,
        "initiatives": [],
        "guestFeedback": [
          5,
          4,
          5
        ],
        "modules": {
          "planning": {
            "summary": "Designed flow with wellness team.",
            "tags": [
              "ux_mockup",
              "workflow_mapping"
            ]
          }
        },
        "team": [],
        "imageUrl": "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  }
];