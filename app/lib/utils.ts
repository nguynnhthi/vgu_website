import directus from '@/lib/directus';
import { readItems, readItem } from '@directus/sdk';
import { notFound } from 'next/navigation';

export async function getNavigationItems(type: string) {
	try {
		const navItems = await directus.request(
			readItems('navigation', {
				filter: {
          type: {
            _eq: type
          }
        },
        fields: ['name', 'path'],
        sort: ['order'],
			})
		);

		return navItems;
	} catch (error) {
		notFound();
	}
}

export async function getStudyPrograms() {
  try {
    const studyPrograms = await directus.request(
      readItems('study_program', {
        fields: ['name'],
        sort: ['order'],
      })
    );
    return studyPrograms;
  } catch (error) {
    notFound();
  }
}

export async function getFigures() {
  try {
    const figures = await directus.request(
      readItems('vgu_in_numbers', {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        fields: ['figure', 'content', 'order'],
        sort: ['order'],
      })
    );
    return figures;
  } catch (error) {
    notFound();
  }
}

export async function getEvents() {
  try {
    const events = await directus.request(
      readItems('events', {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        fields: ['id', 'title', 'date', 'start_time', 'end_time'],
        sort: ['date', 'start_time'],
        limit: 3
      })
    );
    return events;
  } catch (error) {
    notFound();
  }
}

export async function getNews() {
  try {
    const news = await directus.request(
      readItems('posts', {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        fields: ['slug', 'title', { image: ['filename_disk'] }, 'content'],
        sort: ['-publish_date'],
        limit: 3
      })
    );
    return news;
  } catch (error) {
    notFound();
  }
}

export async function getPartnerLogos(block_id: string) {
  try {
    const logos = await directus.request(
      readItem('block_image_slideshow', block_id, {
        fields: ['images.directus_files_id'],
      })
    );
    return logos;
  } catch (error) {
    notFound();
  }
}

export async function getCarousel(id: string) {
  try {
    const carousel = await directus.request(
      readItem('block_carousel', id, {
        fields: [
          {
            carousel_image: [
              {
                carousel_image_id: [
                  { image: ['filename_disk'] }
                ]
              }
            ]
          }
        ]
      })
    );

    if (!carousel || !Array.isArray(carousel.carousel_image)) {
      console.error('Invalid carousel data format:', carousel);
      return null;
    }
    return carousel;
  } catch (error) {
    console.error('Error fetching carousel data:', error);
    return null; // Return null in case of error
  }
}

export async function getMajors(studyprogram: string) {
  try {
    const majors = await directus.request(
      readItems('major', {
        filter: {
          study_program: {
            _eq: studyprogram
          },
        },
        fields: ['id', 'name', { thumbnail: ['filename_disk'] }]
      })
    );
    return majors;
  }
  catch (error) {
    notFound();
  }
}

export async function getMajor(id: string) {
  try {
    const major = await directus.request(
      readItem('major', id, {
        fields: ['id', 'name', {thumbnail: ['filename_disk']}, 'tagline', 'accreditation', 'contact', 'description']
      })
    );
    return major;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getRichText(id: string) {
  try {
    const rich_text = await directus.request(
      readItem('block_richtext', id, {
        fields: ['rich_text'],
      })
    );
    return rich_text;
  } catch (error) {
    notFound();
  }
}

export async function getAllDepartments() {
  try {
    const departments = await directus.request(
      readItems('departments',
        {fields: ['name', 'id', 'description', {thumbnail: ['filename_disk']}]}
      )
    );
    return departments;
  }
  catch (error) {
    notFound();
  }
}

export async function getDepartmentMembers(deptID: string) {
  try {
    const deptMembers = await directus.request(
      readItem('departments', deptID,
      {fields: ['name', {members2: [{item: ['full_name', 'title', 'email', 'phone_number', 'id', {avatar: ['filename_disk']}, 'more_info']}]}]}
      )
    );
    return deptMembers;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getChildDepartments(deptID: string) {
  try {
    const childDepts = await directus.request(
      readItems('departments', 
      {filter: {
        parent_department: {
          _eq: deptID
        }
      },
      fields:['name', 'id', 'description', {thumbnail: ['filename_disk']}]}
      )
    );
    return childDepts;
  }
  catch (error) {
    console.log(error);
  }
}

export function convertDateFormat(inputDate:String) {
  // Split the input date string by '-'
  var parts = inputDate.split('-');
  
  // Create a new Date object with yyyy, mm, dd parts in yyyy-mm-dd format
  var dateObject = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  
  // Extract day, month, and year from the date object
  var day = dateObject.getDate();
  var month = dateObject.getMonth(); // Month is zero-based, so add 1
  var year = dateObject.getFullYear();
  
  // Pad day and month with leading zeros if necessary
  var monthArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  // Return the date in dd-MM-yyyy format
  return day + ' ' + monthArray[month] + ' ' + year;
}

export function removeHtmlTags(input:String) {
  // Regular expression to match HTML tags
  var regex = /<[^>]*>/g;
  
  // Replace HTML tags with an empty string
  var tagFreeString =  input.replace(regex, '');
  return tagFreeString;
}