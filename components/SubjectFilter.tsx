"use client"

import { useEffect, useState } from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select'
import { subjects } from '@/constants'
import { formUrlQuery, removeKeysFromUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("subject") || "all";
  const [subject, setSubject] = useState(current);

  useEffect(() => {
    if (subject === current) return;
    let newUrl = "";
    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [subject]);

  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className='input capitalize'>
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SubjectFilter